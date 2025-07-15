const nodemailer = require('nodemailer');
const subscriber_notification=require('../models/model.js');
const tranporter= nodemailer.createTransport({
    service: 'gmail',
    auth:{
         user:`${process.env.GMAIL}`,
         pass:`${process.env.APP_PASSWORD}`
    }
});
const sendScholarshipNotifcation= async (req,res)=>{
     try {
        
        
     } catch (error) {
         console.log("error accured in sendScholarshipNotifcation",error);
         res.status(500).json({message:"Internal Server Error"});
     }
}