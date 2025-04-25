import mongoose from 'mongoose';

export async function connectToDb(){

    try {
        await mongoose.connect(process.env.MONGO_URI,);
        console.log("Connected to MongoDB successfully")
        
    } catch (error) {
        console.error("Error in database connection:",error)
        
    }

}