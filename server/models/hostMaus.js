import mongoose from "mongoose";

const hostMauSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    reply: {
        type: String,
        required: true,
    },
});



export default mongoose.model('hostMaus',hostMauSchema)