import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user : {type: mongoose.Schema.Types.ObjectId , ref: 'User'},
    bus : {type: mongoose.Schema.Types.ObjectId , ref: 'Bus'},
    destination : {type : string , require : true},
    boarding : {type : string , require : true}
})

export const Booking = mongoose.model("Booking", bookingSchema)