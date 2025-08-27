import express from 'express';
const movieRecommendationsRouter = express.Router();

import { movieRecommendations } from '../controllers/movieRecommendations.controller.js';


movieRecommendationsRouter.get("/:id", movieRecommendations);

// movieRecommendationRouter.get("page/:id", pageNumber);



export { movieRecommendationsRouter };
