import mongoose from "mongoose";

const connectToMongoDb= async()=>{
    try{
    await mongoose.connect(process.env.mongo_db);
    console.log("MongoDB connected")
    } catch (error){
        console.log("Error connecting to mongoDB ", error.message)
    }
}
export default connectToMongoDb