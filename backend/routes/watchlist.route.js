// routes/watchlist.js
import express from "express";
import Watchlist from "../models/watchlist.model.js";

const router = express.Router();

// Toggle movie
router.get("/toggle/:id", async (req, res) => {
  const { id } = req.params;
  
  console.log(id);
  try {
    const existing = await Watchlist.findOne({ movieId: id });
    

    if (existing) {
      // remove if already in watchlist
      await Watchlist.deleteOne({ movieId: id });
      return res.json({ status: "removed" });
    } else {
      // add if not in watchlist
      const movie = new Watchlist({ movieId: id });
      await movie.save();
      return res.json({ status: "added" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all watchlist IDs
router.get("", async (req, res) => {
  try {
    const movies = await Watchlist.find({}, { movieId: 1, _id: 0 });
    res.json(movies.map(m => m.movieId));
  } 
  catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// export default router;
export { router as watchlistRouter };