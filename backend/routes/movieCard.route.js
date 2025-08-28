import express from 'express';
const movieCardRouter = express.Router();

import {movieCard} from '../controllers/movieCard.controller.js';

movieCardRouter.get("/:id", movieCard);

export { movieCardRouter };
