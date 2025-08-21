import mongoose, { Schema } from "mongoose";
const meetingschema=new Schema({
    user_id:{
        type:String,

    },
    meeting_id:{
        type:String,
        required:true
    },
    date:{
        type:date,
        default:Date.now,
        required:true
    }
})
const meeting=mongoose.model('metting',meetingschema);
export {metting}