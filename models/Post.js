import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    topic: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);

