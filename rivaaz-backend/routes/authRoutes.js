import express from "express";
import jwt from "jsonwebtoken";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

// 1. Registration Route: Create a new Michael & Juliet account
router.post("/register", register);

// 2. Login Route: Authenticate and issue tokens
router.post("/login", login);

// 3. Refresh Token Route: Renew access without re-logging in
router.post("/refresh", (req, res) => {
  // We expect the refresh token to be sent in a secure cookie
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token provided" });
  }

  // Verify the Refresh Token using your secret key
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Invalid or expired refresh token" });
    }

    // If valid, generate a fresh short-lived Access Token (15m)
    const accessToken = jwt.sign(
      { id: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" },
    );

    res.json({ accessToken });
  });
});

export default router;
