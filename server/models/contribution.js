import mongoose from "mongoose";

const contributionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    reply: {
        type: String,
        required: true,
    },
});


export default mongoose.model('contribution',contributionSchema)