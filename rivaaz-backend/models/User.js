import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    names: {
      type: String,
      required: true, // e.g., "Michael & Juliet"
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    weddingDate: {
      type: Date,
    },
  },
  { timestamps: true },
);

// Pre-save hook to hash password before saving to DB
userSchema.pre("save", async function () {
  // 1. Only hash if the password is new or being changed
  if (!this.isModified("password")) return;

  try {
    // 2. Generate hash (no need to call next() in an async function)
    this.password = await bcrypt.hash(this.password, 12);
  } catch (error) {
    throw new Error("Password hashing failed");
  }
});

// Method to compare passwords during login
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
