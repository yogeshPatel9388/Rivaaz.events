import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

// Route Imports
import authRoutes from "./routes/authRoutes.js";
import vendorRoutes from "./routes/vendorRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

// Load Environment Variables
dotenv.config();

const app = express();

// --- 1. Middleware ---
app.use(express.json());
app.use(cookieParser()); // Required for secure Refresh Token cookies
app.use(morgan("dev")); // Logs requests for debugging
app.use(helmet()); // Sets secure HTTP headers

// CORS configuration to allow your React frontend (port 5173)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // Allows sending cookies across origins
  }),
);

// --- 2. API Routes ---
app.use("/api/auth", authRoutes); // Register, Login, Refresh
app.use("/api/vendors", vendorRoutes); // Catalog and Vendor Details
app.use("/api/tasks", taskRoutes); // Wedding Tasks & Stats
app.use("/api/bookings", bookingRoutes); // Hired Team & Budgeting

// --- 3. Database & Server Startup ---
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to Rivaaz Database (MongoDB)");
    app.listen(PORT, () => {
      console.log(`🚀 Rivaaz Backend running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database Connection Error:", err.message);
    process.exit(1);
  });

// Root check
app.get("/", (req, res) => res.send("Rivaaz API is live!"));
