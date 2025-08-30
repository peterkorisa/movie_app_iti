import Watchlist from "../models/watchlist.model.js";

const watchlistPage = async (req, res) => {
  try {
    const movies = await Watchlist.find({}, { movieId: 1, _id: 0 });
    res.json(movies.map(m => m.movieId));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const watchlistToggle = async (req, res) => {
  const { id } = req.params;
  
  try {
    const existing = await Watchlist.findOne({ movieId: id });
    

    if (existing) {
        // remove if already in watchlist
        await Watchlist.deleteOne({ movieId: id });
        return res.json({ movie_in_list: 0 });
    } 
    else {
        // add if not in watchlist
        const movie = new Watchlist({ movieId: id });
        await movie.save();
        return res.json({ movie_in_list: 1 });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


export {watchlistPage, watchlistToggle};