import express from 'express';

const movieDetailsRouter = express.Router();

import {movieDetails} from '../controllers/movieDetails.controller.js';


movieDetailsRouter.get("/:id", movieDetails);


export { movieDetailsRouter };
