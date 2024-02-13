import { connectToMongoDB } from "@/utils/mongoDBConnect";
import { UserDataModel } from "@/utils/userDataSchema";
import { NextResponse } from "next/server";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


export const GET = async ({ params })=>{
   const { isAuthenticated} = getKindeServerSession();

    try {
        const authenticated = await isAuthenticated()
        if(!authenticated){
            throw new Error({message:'User Is Not Authenticated', status: 401})
        }
        await connectToMongoDB()
        const userData = await UserDataModel.findOne({ authUserId: params.userId })
        if (!userData){
            throw new Error({message:'User Does Not Exist', status: 404})
        }
        userNotes = userData.notes
        return NextResponse.json({userNotes}, {status: 200})

    } catch (error) {
        console.error(error)
        return NextResponse.json({message: error.message},{status: error.status})
    }
}