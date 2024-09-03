import mongoose from 'mongoose'
import colors from 'colors'
const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Mongodb Database ${conn.connection.host}`.bgMagenta.white)
    }catch(e){
        console.log(`Error in MONGODB ${e}`.bgRed.white)
    }
}

export default connectDB;