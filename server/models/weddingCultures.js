import mongoose from "mongoose";

const weddingSchema = new mongoose.Schema({
    wedding_name: {
        type: String,
        required: true,
    },
    origin_state: {
        type: String,
        required: true,
    },
    short_note: {
        type: String,
        required: true,
    },
    wikipedia_link: {
        type: String,
        required: true,
    },
    image_link: {
        type: String,
        required: true,
    }
});

export default mongoose.model('weddingCultures',weddingSchema)
