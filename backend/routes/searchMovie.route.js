import express from 'express';

const searchRouter = express.Router();

import {search} from '../controllers/searchMovie.controller.js';


searchRouter.get("/:name", search);


export { searchRouter };
