import mongoose from "mongoose";

const gueatMauSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    reply: {
        type: String,
        required: true,
    },
});



export default mongoose.model('guestMaus',gueatMauSchema)