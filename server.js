import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config();
const app = express();
app.use(express.json());


const PORT = process.env.URL || 8080;
app.get((req,res)=>{
  res.json({message:'Welcome'})
})
app.listen(PORT, async() =>{
    try {
        await connectDb;
        console.log(`Established Connection port: ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})