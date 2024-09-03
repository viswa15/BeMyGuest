import mongoose from "mongoose";

const faqsSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    reply: {
        type: String,
        required: true,
    },
});



export default mongoose.model('faqs',faqsSchema)