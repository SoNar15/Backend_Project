import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionRequest = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONGODB Connected !! DB HOST: ${connectionRequest.connection.host}`)
        // Here it was connectionInstance but it got error , it got resolved when I changed it to connectionRequest
        
        // This is used as server of production , testing and deployment is different
        // Hence to know which host we are providing info to is logged 
        // Search about this on internet
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1)
        // Research about process exit 

    }
}

export default connectDB