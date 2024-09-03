import mongoose from "mongoose";

const cancellationSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    reply: {
        type: String,
        required: true,
    },
});



export default mongoose.model('cancellation',cancellationSchema)