import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Analytics from "./models/Analytics.js";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected"));

app.post("/api/track", async (req, res) => {
  let stats = await Analytics.findOne();
  if (!stats) stats = new Analytics();

  stats.totalViews++;
  await stats.save();

  res.json({ message: "Tracked" });
});

app.get("/api/stats", async (req, res) => {
  const stats = await Analytics.findOne();
  res.json(stats);
});

app.listen(5000, () => console.log("Server running on port 5000"));
