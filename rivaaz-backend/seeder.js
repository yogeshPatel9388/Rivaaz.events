import mongoose from "mongoose";
import dotenv from "dotenv";
import Vendor from "./models/Vendor.js";

dotenv.config();

const vendors = [
  {
    name: "Eternal Moments Studio",
    category: "Photography",
    rating: 5.0,
    location: "California, USA",
    price: 3500,
    about:
      "Specializing in natural light and candid wedding photography. We capture the soul of your celebration with elegance.",
    gallery: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400",
    ],
    plans: [
      { name: "Basic", price: "$1,495", desc: "4 Hours Coverage" },
      { name: "Advanced", price: "$2,750", desc: "8 Hours + Engagement" },
      { name: "Dream+", price: "$4,250", desc: "Full Day + 2nd Shooter" },
    ],
  },
  {
    name: "Bloom & Stem",
    category: "Flowers",
    rating: 4.8,
    location: "New York, USA",
    price: 1750,
    about:
      "Artisan floral arrangements designed to bring your venue to life with scent and color.",
    gallery: [
      "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=800",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400",
    ],
    plans: [
      { name: "Petite", price: "$800", desc: "Bouquets & Boutonnières" },
      { name: "Classic", price: "$1,750", desc: "Ceremony & Reception Decor" },
    ],
  },
  {
    name: "Velvet Confections",
    category: "Wedding Cakes",
    rating: 4.9,
    location: "Chicago, USA",
    price: 950,
    about:
      "Custom luxury cakes that taste as beautiful as they look. Hand-crafted sugar flowers and premium ingredients.",
    gallery: [
      "https://images.unsplash.com/photo-1535254973040-607b474cb80d?w=800",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
      "https://images.unsplash.com/photo-1535124403011-3920a7863063?w=400",
    ],
    plans: [
      { name: "Single Tier", price: "$400", desc: "Intimate Weddings" },
      { name: "Grand 3-Tier", price: "$950", desc: "Serves up to 150 guests" },
    ],
  },
  {
    name: "Lumina Decor",
    category: "Lighting & Decor",
    rating: 5.0,
    location: "San Francisco, USA",
    price: 2200,
    about:
      "Transforming spaces through atmospheric lighting and custom stage design.",
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400",
      "https://images.unsplash.com/photo-1502033006960-a1b5c490ec0f?w=400",
    ],
    plans: [
      { name: "Ambience", price: "$1,200", desc: "Uplighting & Fairy Lights" },
      { name: "Full Gala", price: "$2,200", desc: "Custom Rigging & Drape" },
    ],
  },
];

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // Clear existing data to avoid duplicates
    await Vendor.deleteMany();

    // Insert new data
    await Vendor.insertMany(vendors);

    console.log("💎 Rivaaz Vendors Seeded Successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

importData();
