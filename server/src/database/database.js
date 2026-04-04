import mongoose from "mongoose";
import {MONGODB_URI} from "../config/env.js";

const connectDB = async() => {
    try{
       
        await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB connected !!! ${mongoose.connection.host}`);

    } catch(error){
        console.log("MongoDB connection failed !!!", error);
        process.exit(1);
    }
}

export default connectDB;
