import React, { createContext, useContext, useState } from "react";
import api from "../services/api"; // Swapped raw axios for your custom api service

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize user from localStorage to persist session on refresh
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("rivaaz_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Login Function
  const login = async (email, password) => {
    try {
      // Using the api instance ensures withCredentials and baseURL are applied
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const { accessToken, user: userData } = response.data;

      // Update State
      setUser(userData);

      // Persist to LocalStorage
      localStorage.setItem("rivaaz_token", accessToken);
      localStorage.setItem("rivaaz_user", JSON.stringify(userData));

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  // Logout Function
  const logout = async () => {
    try {
      // Optional: Call backend to clear the refresh token cookie
      await api.post("/auth/logout");
    } catch (err) {
      console.error("Logout error on server:", err);
    } finally {
      // Always clear local state regardless of server response
      setUser(null);
      localStorage.removeItem("rivaaz_token");
      localStorage.removeItem("rivaaz_user");
      window.location.href = "/login";
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
