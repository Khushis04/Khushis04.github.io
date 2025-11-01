import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema({
  totalViews: { type: Number, default: 0 }
});

export default mongoose.model("Analytics", analyticsSchema);
