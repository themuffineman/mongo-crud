import { connectToMongoDB } from "@/utils/mongoDBConnect"
// import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { UserDataModel, NotesDataModel } from "@/utils/userDataSchema";
import { NextResponse } from "next/server";


export const POST= async (req)=>{

    try {
        // const { isAuthenticated, getUser} = getKindeServerSession();

        // if(!(await isAuthenticated())){
        //     throw new Error({message: "User not authorized", status: 401})
        // }

        // const {id} = await getUser()
        const {noteText, id} = await req.json()
        await connectToMongoDB()

        const user = await UserDataModel.findOne({ authUserId:id });

        if (!user) {
            throw new Error({message: "User not found", status: 404});
        }

        const newNote = new NotesDataModel({
            note: noteText,
            userID: user._id,
            deleted: false
        });

        await newNote.save();

        user.notes.push(newNote._id);
        await user.save();

        return NextResponse.json({message: "Note Created"}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: error.message}, {status: error.status})
    }
}