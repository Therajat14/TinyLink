import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    required: true,
  },
  originalUrl: {
    type: String,
    required: true,
  },

  clicks: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Link = mongoose.model("Link", linkSchema);

export default Link;
