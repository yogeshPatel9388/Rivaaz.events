import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Photography",
        "Flowers",
        "Beauty & Health",
        "Lighting & Decor",
        "Wedding Cakes",
        "Band",
        "Transportation",
        "Venues",
      ],
    },
    rating: {
      type: Number,
      default: 5.0,
      min: 0,
      max: 5,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    gallery: [
      {
        type: String, // URLs to images
      },
    ],
    // For the VendorDetail page requirements
    about: {
      type: String,
    },
    plans: [
      {
        name: String,
        price: String,
        desc: String,
      },
    ],
  },
  { timestamps: true },
);

const Vendor = mongoose.model("Vendor", vendorSchema);
export default Vendor;
