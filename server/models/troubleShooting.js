import mongoose from "mongoose";

const troubleShootingSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    reply: {
        type: String,
        required: true,
    },
});

export default mongoose.model('TroubleShooting',troubleShootingSchema)
