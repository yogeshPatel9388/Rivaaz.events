import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // Allows secure HttpOnly cookies for refresh tokens
});

// 1. REQUEST INTERCEPTOR: Attach the Access Token to every outgoing call
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("rivaaz_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 2. RESPONSE INTERCEPTOR: Handle Token Expiration and Refreshing
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 403 usually means the Access Token expired
    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to get a new access token using the HttpOnly Refresh Cookie
        const res = await axios.post(
          "http://localhost:5000/api/auth/refresh", // Updated path to match your authRoutes
          {},
          { withCredentials: true },
        );

        const { accessToken } = res.data;

        // Store new token in localStorage
        localStorage.setItem("rivaaz_token", accessToken);

        // Update the failed request's header and retry it
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // If refresh fails, clear everything and force re-login
        localStorage.removeItem("rivaaz_token");
        localStorage.removeItem("rivaaz_user");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
