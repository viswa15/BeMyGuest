import express from 'express'

import { createWeddingDetailsController,getTopSixWeddingsController,getWeddingsController,getWeddingController } from '../controllers/featuredWeddingController.js';

const router = express.Router();

//add a wedding
router.post("/add-wedding",createWeddingDetailsController);

//get top 6 weddings
router.get("/recent-weddings",getTopSixWeddingsController)

//get all weddings
router.get("/featured-weddings",getWeddingsController);

//get wedding based on its id
router.get("/featured-wedding/:_id",getWeddingController);

export default router;