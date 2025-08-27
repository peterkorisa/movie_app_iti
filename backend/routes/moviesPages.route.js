import express from 'express';

const mainRouter = express.Router();

import {page, pageNumber} from '../controllers/moviesPages.controller.js';

mainRouter.get("", page);

mainRouter.get("page/:id", pageNumber);



export { mainRouter };
