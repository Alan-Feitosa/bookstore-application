import mongoose from "mongoose";
import { config } from "../../config/config";

export const connectDB = async (dbUrl: string) =>{
    try{
        await mongoose.connect(config.dbUrl);
        console.log('Database connected');
    } catch (error){
        console.error('Error connecting to the database', error);
    }
};