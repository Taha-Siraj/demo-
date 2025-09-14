import mongoose from "mongoose";

const serviceSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);