import express from "express";
import { createBooking, getMyTeam } from "../controllers/bookingController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Apply verifyToken to all routes in this file
router.use(verifyToken);

/**
 * @route   POST /api/bookings/create
 * @desc    Hires a vendor and adds to the user's team
 */
router.post("/create", createBooking);

/**
 * @route   GET /api/bookings/my-team
 * @desc    Fetch all vendors hired by Michael & Juliet
 */
router.get("/my-team", getMyTeam);

export default router;
