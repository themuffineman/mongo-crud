import { connectToMongoDB } from "@/utils/mongoDBConnect";
import { redirect } from 'next/navigation'

export const POST = async(req)=>{
    try {
        const {authUserId, email} = req.body
        await connectToMongoDB()
        let user = await UserDataModel.findOne({ authUserId });

        if (!user) {
            user = await UserDataModel.create({ authUserId, email });
            alert("Account Created")
            redirect(`/dashboard`)
        }
        redirect(`/dashboard`)
    } catch (error) {
        console.error("Error Fetching From Database:", error)
        alert('Error Fetchng from database')
        redirect('/')
    }
}