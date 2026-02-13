import Booking from "../models/Booking.js";
import Vendor from "../models/Vendor.js";

/**
 * @desc    Create a new booking (Hire a Vendor)
 * @route   POST /api/bookings
 * @access  Private
 */
export const createBooking = async (req, res) => {
  try {
    const { vendorId, planName, price } = req.body;
    const userId = req.user.id; // From verifyToken middleware

    // 1. Prevent duplicate bookings for the same vendor
    const existingBooking = await Booking.findOne({
      user: userId,
      vendor: vendorId,
    });
    if (existingBooking) {
      return res
        .status(400)
        .json({ message: "You have already hired this professional." });
    }

    // 2. Create the booking document
    const booking = await Booking.create({
      user: userId,
      vendor: vendorId,
      contractPrice: price,
      status: "Confirmed",
      planName: planName,
    });

    res.status(201).json({
      message: "Vendor successfully added to your team!",
      booking,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Booking process failed", error: error.message });
  }
};

/**
 * @desc    Get the logged-in user's Vendor Team
 * @route   GET /api/bookings/my-team
 * @access  Private
 */
export const getMyTeam = async (req, res) => {
  try {
    const team = await Booking.find({ user: req.user.id })
      .populate("vendor") // Pulls in Vendor details (name, category, avatar)
      .sort({ createdAt: -1 });

    const totalInvestment = team.reduce(
      (sum, item) => sum + item.contractPrice,
      0,
    );

    res.status(200).json({
      team,
      totalInvestment,
      count: team.length,
    });
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve your team" });
  }
};
