import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter an name"],
    },
    email: {
      type: String,
      required: [true, "please Enter an email"],
      unique: [true, "Email already exist"],
    },
    password: {
      type: String,
      required: [true, "please enter an password"],
      minlength: [6, "password must be atleast 6 characters"],
      select: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
