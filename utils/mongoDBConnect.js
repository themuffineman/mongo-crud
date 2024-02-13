import mongoose from "mongoose"

export const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB Connected")
    } catch (error) {
       console.error("Failed to connect to MonogDB:", error) 
    }
}