import express from "express";

import {
  faqsController,
  testimonalsController,
  weddingController,
  troubleShootingController,
  preparationController,
  contributionController,
  cancellationController,
  guestMausController,
  hostMausController
} from "../controllers/staticContentController.js";
import testimonials from "../models/testimonials.js";

const router = express.Router();

//faqs
router.get("/faqs", faqsController);  //integration completed
//testimonials
router.get("/testimonials", testimonalsController);     //integration completed
//wedding
router.get("/wedding-cultures", weddingController); //integration completed
//trouble shooting
router.get("/trouble-shootings", troubleShootingController);    //integration completed
//preparations
router.get("/preparations", preparationController);     //integration completed
//contributions
router.get("/contributions", contributionController);  //integration completed
//cancellations
router.get("/cancellation", cancellationController);    //integration completed
//guest-maus
router.get("/guest-maus",guestMausController);     //integration completed
//host-maus
router.get("/host-maus",hostMausController);     //integration completed

//to be added controller
//adding testimonials

//individual profile
//any weddings registerd as a couple or visitor all should be shown in his profile

export default router;
