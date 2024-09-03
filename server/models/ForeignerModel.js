import mongoose from 'mongoose'

const foreignerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    country : {
        type : String,
        required : true,
    },
    phone : {
        type : Number,
        required : true,
    },
    password : {
        type : String,
        required : true
    }
},{timestamp : true})

export default mongoose.model('foreigner',foreignerSchema)