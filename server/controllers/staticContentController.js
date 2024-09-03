import cancellation from "../models/cancellation.js";
import contribution from "../models/contribution.js";
import preparation from "../models/preparation.js";
import troubleShooting from "../models/troubleShooting.js";
import weddingCultures from "../models/weddingCultures.js";
import testimonials from "../models/testimonials.js";
import faqs from "../models/faqs.js";
import guestMaus from "../models/guestMaus.js";
import hostMaus from "../models/hostMaus.js";

//faqs
export const faqsController = async (req, res) => {
  try {
    const faqsData = await faqs.find();
    console.log("faqsData:",faqsData)
    res.status(201).send({
      success: true,
      message: "Successfully retrieved",
      faqsData
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Server error",
    });
  }
};

//testimonials
export const testimonalsController = async (req, res) => {
  try {
    const testimonialsData = await testimonials.find({});
    console.log(testimonialsData);
    res.status(201).send({
      success: true,
      message: "Successfully retrieved",
      testimonialsData,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Server error",
    });
  }
};

//weddings
export const weddingController = async (req, res) => {
  try {
    const weddings = await weddingCultures.find({});
    console.log(weddings);
    res.status(201).send({
      success: true,
      message: "Successfully retrieved",
      weddings,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Server error",
    });
  }
};

//troubleshootings
export const troubleShootingController = async (req, res) => {
  try {
    const troubleShootings = await troubleShooting.find({});
    console.log(troubleShootings);
    res.status(201).send({
      success: true,
      message: "Successfully retrieved",
      troubleShootings,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Server error",
    });
  }
};

//preparations
export const preparationController = async (req, res) => {
  try {
    const preparations = await preparation.find({});
    console.log(preparations);
    res.status(201).send({
      success: true,
      message: "Successfully retrieved",
      preparations,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Server error",
    });
  }
};

//contributions
export const contributionController = async (req, res) => {
  try {
    const contributions = await contribution.find({});
    console.log(contributions);
    res.status(201).send({
      success: true,
      message: "Successfully retrieved",
      contributions,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Server error",
    });
  }
};

//cancellations
export const cancellationController = async (req, res) => {
  try {
    const cancellations = await cancellation.find({});
    console.log(cancellations);
    res.status(201).send({
      success: true,
      message: "Successfully retrieved",
      cancellations,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Server error",
    });
  }
};

//guest-maus
export const guestMausController = async (req, res) => {
  try {
    const guestMausItems = await guestMaus.find({});
    console.log(guestMausItems);
    res.status(201).send({
      success: true,
      message: "Successfully retrieved",
      guestMausItems,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Server error",
    });
  }
};

//host-maus
export const hostMausController = async (req, res) => {
  try {
    const hostMausItems = await hostMaus.find({});
    console.log(hostMausItems);
    res.status(201).send({
      success: true,
      message: "Successfully retrieved",
      hostMausItems,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Server error",
    });
  }
};