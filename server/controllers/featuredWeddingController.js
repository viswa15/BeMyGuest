import featuredWedding from "../models/featuredWedding.js";

// //create featured wedding
// export const createWeddingController = async (req, res) => {
//   try {
//     const {
//       role,
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       groomDetails,
//       brideDetails,
//       otherDetails,
//       images,
//       story,
//       weddingDurationDays,
//       foodType,
//       alcoholOffered,
//       mainLanguage,
//       weddingStartDate,
//       weddingStartTime,
//       eventLocation,
//       region,
//       events,
//       ceremonyGuide,
//       paymentMethod,
//       paypalEmail,
//     } = req.body;

//     // Validation checks
//     if (!role || !["Bride", "Groom", "Other"].includes(role)) {
//       return res.status(400).json({ message: "Invalid role" });
//     }

//     if (!firstName || !lastName) {
//       return res
//         .status(400)
//         .json({ message: "First name and last name are required" });
//     }

//     if (!email || !/.+\@.+\..+/.test(email)) {
//       return res.status(400).json({ message: "Invalid email address" });
//     }

//     if (!phoneNumber) {
//       return res.status(400).json({ message: "Phone number is required" });
//     }

//     if (!images) {
//       return res.status(400).json({ message: "Image is required" });
//     }

//     if (!story) {
//       return res.status(400).json({ message: "Story is required" });
//     }

//     if (!weddingDurationDays) {
//       return res.status(400).json({ message: "Wedding duration is required" });
//     }

//     if (!foodType) {
//       return res.status(400).json({ message: "Food type is required" });
//     }

//     if (typeof alcoholOffered !== "boolean") {
//       return res
//         .status(400)
//         .json({ message: "Alcohol offered field must be a boolean" });
//     }

//     if (!mainLanguage) {
//       return res.status(400).json({ message: "Main language is required" });
//     }

//     if (!weddingStartDate) {
//       return res
//         .status(400)
//         .json({ message: "Wedding start date is required" });
//     }

//     if (
//       !["Morning", "Afternoon", "Evening", "Night"].includes(weddingStartTime)
//     ) {
//       return res.status(400).json({ message: "Invalid wedding start time" });
//     }

//     if (!region) {
//       return res.status(400).json({ message: "Region is required" });
//     }

//     if (paymentMethod === "PayPal" && !paypalEmail) {
//       return res.status(400).json({ message: "PayPal email is required" });
//     }

//     // Create a new wedding
//     const newWedding = new featuredWedding({
//       role,
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       groomDetails,
//       brideDetails,
//       otherDetails,
//       images,
//       story,
//       weddingDurationDays,
//       foodType,
//       alcoholOffered,
//       mainLanguage,
//       weddingStartDate,
//       weddingStartTime,
//       eventLocation,
//       region,
//       events,
//       ceremonyGuide,
//       paymentMethod,
//       paypalEmail,
//     });

//     // Save to database
//     await newWedding.save();

//     // Return a successful response
//     return res.status(201).json({
//       success : true,
//       message: "Wedding created successfully",
     
//     });
//   } catch (error) {
//     // Handle errors
//     console.error(error);
//     return res.status(500).json({
//       message: "Server error. Please try again later.",
//       error: error.message,
//     });
//   }
// };

export const createWeddingDetailsController = async (req, res) => {
  try {
    // Destructure request body
    const {
      relation_with_couple,
      weddingCity,
      weddingCountry,
      weddingPinCode,
      weddingState,
      groom_firstname,
      groom_surname,
      groom_email,
      groom_number,
      bride_firstname,
      bride_surname,
      bride_email,
      bride_number,
      image,
      about_host,
      days_of_event,
      events,
      main_language,
      diet,
      ceremony_guide_first_name,
      ceremony_guide_last_name,
      ceremony_guide_number,
      ceremony_guide_email,
      ceremony_guide_relation_with_couple,
      ceremony_guide_spoken_language,
      paypal_email
    } = req.body;

    // Validation checks for each required field
    if (!relation_with_couple) {
      return res.status(400).json({ message: "Relation with couple is required." });
    }
    if (!weddingCity) {
      return res.status(400).json({ message: "city is required." });
    }
    if (!weddingCountry) {
      return res.status(400).json({ message: "country is required." });
    }
    if (!weddingPinCode) {
      return res.status(400).json({ message: "pincode is required." });
    }
    if (!weddingState) {
      return res.status(400).json({ message: "state is required." });
    }
    if (!groom_firstname) {
      return res.status(400).json({ message: "Groom's first name is required." });
    }
    if (!groom_surname) {
      return res.status(400).json({ message: "Groom's surname is required." });
    }
    if (!groom_email) {
      return res.status(400).json({ message: "Groom's email is required." });
    }
    if (!groom_number) {
      return res.status(400).json({ message: "Groom's phone number is required." });
    }
    if (!bride_firstname) {
      return res.status(400).json({ message: "Bride's first name is required." });
    }
    if (!bride_surname) {
      return res.status(400).json({ message: "Bride's surname is required." });
    }
    if (!bride_email) {
      return res.status(400).json({ message: "Bride's email is required." });
    }
    if (!bride_number) {
      return res.status(400).json({ message: "Bride's phone number is required." });
    }
    if (!image) {
      return res.status(400).json({ message: "Image is required." });
    }
    if (!about_host || !about_host.groomSideStory || !about_host.brideSideStory) {
      return res.status(400).json({ message: "Host stories for both groom and bride are required." });
    }
    if (!days_of_event) {
      return res.status(400).json({ message: "Number of event days is required." });
    }
    if (!events || !Array.isArray(events) || events.length === 0) {
      return res.status(400).json({ message: "At least one event detail is required." });
    }
    if (!main_language || !Array.isArray(main_language) || main_language.length === 0) {
      return res.status(400).json({ message: "At least one main language is required." });
    }
    if (!diet || !Array.isArray(diet) || diet.length === 0) {
      return res.status(400).json({ message: "At least one diet preference is required." });
    }
    if (!ceremony_guide_first_name) {
      return res.status(400).json({ message: "Ceremony guide's first name is required." });
    }
    if (!ceremony_guide_last_name) {
      return res.status(400).json({ message: "Ceremony guide's last name is required." });
    }
    if (!ceremony_guide_number) {
      return res.status(400).json({ message: "Ceremony guide's phone number is required." });
    }
    if (!ceremony_guide_email) {
      return res.status(400).json({ message: "Ceremony guide's email is required." });
    }
    if (!ceremony_guide_relation_with_couple) {
      return res.status(400).json({ message: "Ceremony guide's relation with the couple is required." });
    }
    if (!ceremony_guide_spoken_language) {
      return res.status(400).json({ message: "Ceremony guide's spoken language is required." });
    }
    if (!paypal_email) {
      return res.status(400).json({ message: "PayPal email is required." });
    }

    // Create a new wedding details document
    const weddingDetails = new featuredWedding({
      relation_with_couple,
      weddingCity,
      weddingCountry,
      weddingPinCode,
      weddingState,
      groom_firstname,
      groom_surname,
      groom_email,
      groom_number,
      bride_firstname,
      bride_surname,
      bride_email,
      bride_number,
      image,
      about_host,
      days_of_event,
      events,
      main_language,
      diet,
      ceremony_guide_first_name,
      ceremony_guide_last_name,
      ceremony_guide_number,
      ceremony_guide_email,
      ceremony_guide_relation_with_couple,
      ceremony_guide_spoken_language,
      paypal_email
    });

    // Save the document to the database
    await weddingDetails.save();

    // Send a success response
    res.status(201).json({ success : true,message: "Wedding details saved successfully." });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

//get top 6 weddings
export const getTopSixWeddingsController = async(req,res) =>{
  try {
    const limit = parseInt(req.query.limit) || 6; // default to 6 items
    const page = parseInt(req.query.page) || 1;  // default to page 1
    const weddings = await featuredWedding.find().sort({ createdAt: -1 }).limit(limit).skip((page - 1) * limit);;
    const weddingsLength = weddings.length;
    res.status(201).send({
      success: true,
      message: "Successfully retrieved",
      weddingsLength,
      weddings,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Error during retrieving weddings",
      e,
    });
  }
}

//get all weddings
export const getWeddingsController = async (req, res) => {
  try {
    const weddings = await featuredWedding.find({});
    res.status(201).send({
      success: true,
      message: "Successfully retrieved",
      weddings,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Error during retrieving weddings",
      e,
    });
  }
};

//get single wedding
export const getWeddingController = async (req, res) => {
  try {
    const { _id } = req.params;
    const wedding = await featuredWedding.findOne({ _id });
    res.status(201).send({
      success: true,
      message: "Wedding successfully retrieved",
      wedding,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Error during retreival of wedding",
      e,
    });
  }
};
