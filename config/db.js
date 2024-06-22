import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = mongoose.connect(process.env.URL)
export default connectDb