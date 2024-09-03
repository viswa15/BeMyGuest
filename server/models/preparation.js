import mongoose from "mongoose";

const preparationSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    reply: {
        type: String,
        required: true,
    },
});

export default mongoose.model('preparation',preparationSchema)