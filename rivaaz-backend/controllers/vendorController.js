import Vendor from "../models/Vendor.js";

/**
 * @desc Get all vendors for the Masonry Catalog
 * @route GET /api/vendors
 */
export const getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find().sort({ createdAt: -1 });
    res.status(200).json(vendors);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch vendors", error: error.message });
  }
};

/**
 * @desc Get a single vendor's full details
 * @route GET /api/vendors/:id
 */
export const getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);

    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    res.status(200).json(vendor);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid Vendor ID format" });
    }
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * @desc Search/Filter vendors (Optional helper for search bar)
 */
export const searchVendors = async (req, res) => {
  const { query } = req.query;
  try {
    const vendors = await Vendor.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    });
    res.status(200).json(vendors);
  } catch (error) {
    res.status(500).json({ message: "Search failed" });
  }
};
