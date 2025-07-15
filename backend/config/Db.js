const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const connectDb=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI,{});
         if(conn){
            console.log("Database connected successfully");
         }
    } catch (error) {
         console.log("error accured"+error);
    }
}
module.exports=connectDb;