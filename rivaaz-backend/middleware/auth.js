import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if Authorization header exists and follows Bearer schema
    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Unauthorized: Access denied, no token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    // Verify the JWT token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          message: "Forbidden: Token is invalid or has expired",
        });
      }

      // Attach decoded user info (id, etc.) to the request object
      req.user = decoded;
      next();
    });
  } catch (error) {
    // Catch-all for server-side processing errors
    res
      .status(500)
      .json({ message: "Internal Server Error in Auth Middleware" });
  }
};
