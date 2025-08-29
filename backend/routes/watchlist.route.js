// routes/watchlist.js
import express from "express";
const router = express.Router();


import {watchlistPage, watchlistToggle} from "../controllers/watchlist.controller.js";


router.get("", watchlistPage); // Get all watchlist IDs
router.get("/toggle/:id", watchlistToggle); // Toggle movie

// export default router;
export { router as watchlistRouter };