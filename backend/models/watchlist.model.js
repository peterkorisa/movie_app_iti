// models/Watchlist.js
import mongoose from "mongoose";

const watchlistSchema = new mongoose.Schema({
  movieId: { type: String, required: true, unique: true }
});

export default mongoose.model("Watchlist", watchlistSchema);
