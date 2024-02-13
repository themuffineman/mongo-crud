import { connectToMongoDB } from "@/utils/mongoDBConnect";
import { UserDataModel } from "@/utils/userDataSchema";

export const POST = async (req)=>{
    const requestBody = req.body
    await connectToMongoDB();
    UserDataModel.findOneAndUpdate(
       // Search criteria
        { authUserId: requestBody.authUserId },
      
        // Update operation
        { notes: "newemail@example.com" },
      
        // Options
        { new: true } // To return the updated document
    )
}