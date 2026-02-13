import express from "express";
import {
  getVendors,
  getVendorById,
  searchVendors,
} from "../controllers/vendorController.js";

const router = express.Router();

/**
 * @route   GET /api/vendors
 * @desc    Fetch all vendors for the Masonry Grid
 * @access  Public
 */
router.get("/", getVendors);

/**
 * @route   GET /api/vendors/search
 * @desc    Search vendors by name or category
 * @access  Public
 */
router.get("/search", searchVendors);

/**
 * @route   GET /api/vendors/:id
 * @desc    Fetch a single vendor for the Detail page
 * @access  Public
 */
router.get("/:id", getVendorById);

export default router;
