import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
  filename: String,
  originalName: String,
  size: Number,
  path: String,
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("File", FileSchema);