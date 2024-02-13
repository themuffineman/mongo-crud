import mongoose from "mongoose";
const Schema = mongoose.Schema;

const notesData = new Schema({
    note: String,
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'userData' // This references the 'userData' collection
    },
    deleted: Boolean
}, { timestamps: true });

const userData = new Schema({
    _id: { 
        type: Schema.Types.ObjectId,
        auto: true,
    },
    authUserId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    notes: [{ type: Schema.Types.ObjectId, ref: 'notesData' }] // Array of references to notesData
});

const UserDataModel = mongoose.model('userData', userData);
const NotesDataModel = mongoose.model('notesData', notesData);

export { UserDataModel, NotesDataModel };
