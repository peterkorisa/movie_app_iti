import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app = express();


import { mainRouter } from './routes/moviesPages.route.js';
import { searchRouter } from './routes/searchMovie.route.js';
import { movieDetailsRouter } from './routes/movieDetails.route.js';
import { movieRecommendationsRouter } from './routes/movieRecommendations.route.js';

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


// Routes
app.use("/movie/search", searchRouter); // baseURL/movie/search/{name}?page={pageNumber}
app.use("/movie/recommendations", movieRecommendationsRouter); // baseURL/movie/{id}/recommendations
app.use("/movie", movieDetailsRouter); // baseURL/movie/{id}
// app.use("/watchlist", watchlistRouter); // baseURL/watchlist
app.use("", mainRouter);  // baseURL  OR  baseURL/page/{number}


// Server Start
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


// Database connection

//3v7qTpiPXsbYVFN7
// mongoose.connect('').then(() => {
//   console.log("Connected to MongoDB");
// }).catch(err => {
//   console.error("MongoDB connection error:", err);
// });