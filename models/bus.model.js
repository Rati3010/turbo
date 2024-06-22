import mongoose from "mongoose";

const  busSchema = new mongoose.Schema({
    name : {type:String, require:true},
    registarionNo : {type:String, require:true, unique : true},
    depTime : String,
    arvTime : String,
});

export const Bus = mongoose.model("Bus",busSchema);
