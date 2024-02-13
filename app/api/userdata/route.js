import { connectToMongoDB } from "@/utils/mongoDBConnect";
import { UserDataModel } from "@/utils/userDataSchema";
import { NextResponse } from "next/server";

export const POST = async (req)=>{

    try {
        const {id, email} = await req.json()
        await connectToMongoDB()
        let userData = await UserDataModel.findOne({ authUserId: id });
        if (!userData) {
            userData = await UserDataModel.create({ authUserId: id, email, notes: [] });
        }
        return NextResponse.json({userNotes: userData.notes}, {status: 200})

    } catch (error) {
        console.error(error)
        return NextResponse.json({message: error},{status: 500})
    }
}