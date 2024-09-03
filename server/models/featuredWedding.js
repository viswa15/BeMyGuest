import mongoose from 'mongoose';

const weddingDetailsSchema = new mongoose.Schema({
  // Page 1 fields
  relation_with_couple: {
    type: String,
    required: true,
  },
  weddingCity : {
    type : String,
    required : true,
  },
    weddingCountry:{
      type : String,
      required : true,
    },
    weddingPinCode:{
      type : String,
      required : true,
    },
    weddingState:{
      type : String,
    required : true,
    },
  groom_firstname : {
    type : String,
    required : true,
  },
  groom_surname : {
    type : String,
    required : true,
  },
  groom_email: {
    type : String,
    required : true,
  },
  groom_number: {
    type : String,
    required : true,
  },
  bride_firstname: {
    type : String,
    required : true,
  },
  bride_surname: {
    type : String,
    required : true,
  },
  bride_email: {
    type : String,
    required : true,
  },
  bride_number: {
    type : String,
    required : true,
  },


  // Page 2 fields
  image: {
    type: String, // Assuming image URLs or file paths
    required: true,
  },
  about_host : {
    groomSideStory: {
      type: String,
      required: true,
    },
    brideSideStory : {
      type : String,
      required: true,
    },
  },
  
  // Page 3 fields
  days_of_event: {
    type: Number,
    required: true,
  },
  events : {
    type : Array,
    required : true,
  },
  main_language : {
    type : Array,
    required : true,
  },
  diet: {
    type: Array,
    required: true,
  },

  // Page 4 fields - Ceremony guide
  ceremony_guide_first_name: {
    type : String,
    required: true,
  },
    ceremony_guide_last_name: {
      type : String,
      required: true,
    },
    ceremony_guide_number: {
      type : String,
      required: true,
    },
    ceremony_guide_email: {
      type : String,
      required: true,
    },
    ceremony_guide_relation_with_couple: {
      type : String,
      required: true,
    },
    ceremony_guide_spoken_language: {
      type : String,
      required: true,
    },
    paypal_email: {
      type : String,
      required: true,
    },
}, {
  timestamps: true,
});


export default mongoose.model('featuredWedding', weddingDetailsSchema);
