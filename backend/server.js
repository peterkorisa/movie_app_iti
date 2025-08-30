import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app = express();


import { mainRouter } from './routes/moviesPages.route.js';
import { searchRouter } from './routes/searchMovie.route.js';
import { movieCardRouter } from './routes/movieCard.route.js';
import { movieDetailsRouter } from './routes/movieDetails.route.js';
import { movieRecommendationsRouter } from './routes/movieRecommendations.route.js';
import { watchlistRouter } from './routes/watchlist.route.js';

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


// Routes
app.use("/movie/recommendations", movieRecommendationsRouter); // baseURL/movie/{id}/recommendations
app.use("/movie/search", searchRouter); // baseURL/movie/search/{name}?page={pageNumber}
app.use("/movie/card", movieCardRouter); // baseURL/movie/{id}
app.use("/movie", movieDetailsRouter); // baseURL/movie/{id}

app.use("/watchlist", watchlistRouter); // baseURL/crud/watchlist

app.use("", mainRouter);  // baseURL  OR  baseURL/page/{number}


// Server Start
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    
    // DataBase Start
    mongoose.connect('mongodb+srv://admin:iti_123456789@cluster0.monvmyk.mongodb.net/ITI_Movies?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to database!');
    })
    .catch((err) => {
        console.error('Could not connect to database...', err);
    });
});