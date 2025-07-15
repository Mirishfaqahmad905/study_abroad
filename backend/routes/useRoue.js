const express=require('express');
const router=express.Router();
const path=require('path');
const multer=require('multer');
const fs=require('fs');
const { saveScholarshipData,adminController, getScholarshipData ,saveInternshipData,get_internship , add_leader_data,get_leadership_data,contact_controller,subscriber_controller,gettting_contact_data,deleleMessage, saveBlog,bloge_data_fetch, deleteScholarship, Delete_bloge_} = require('../controller/Controller.js');

router.get('/get/allbloge',bloge_data_fetch)
router.post("/save/scholarshipdata", saveScholarshipData);
router.get('/save/data/my',(req,res)=>{
     res.send({message:"hello word"});
})
router.get('/get/internshipdata',get_internship);
router.post('/admin/login',adminController);
router.post("/add/leader_data",add_leader_data);
router.get("/get/leader_data",get_leadership_data);
router.post("/admin/saveInternship",saveInternshipData)
router.get('/get/scholarship_data', getScholarshipData)
router.post('/contact', contact_controller);
router.get('/getMessage',gettting_contact_data);
router.post('/subscriber', subscriber_controller);
router.delete('/deleleMessage/:id',deleleMessage);
router.delete('/delete/scholarship/:id',deleteScholarship);
router.delete('/delete_bloge/:id',Delete_bloge_);
// ✅ Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = 'uploads/blog_images';
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});
const upload = multer({ storage });
router.post('/add/blog', upload.array('images'), saveBlog)
// ✅ Blog route

module.exports = router;