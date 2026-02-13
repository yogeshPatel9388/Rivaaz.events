import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
    status: {
      type: String,
      enum: ["In Progress", "Confirmed", "Completed", "Cancelled"],
      default: "In Progress",
    },
    contractPrice: { type: Number, required: true },
    planName: { type: String },
    lastContact: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export default mongoose.model("Booking", bookingSchema);
