const express = require("express");
const adminMiddleware = require("../middleware/admin"); // Correct path to the middleware
const router = express.Router();
const {Admin,Course}=require("../DB/datab")


router.post('/signup', async(req, res) => {
 const Username=req.body.username;
 const Password=req.body.Password;
  await Admin.create({
    Username,
    Password
  })
  res.json({msg:"Admin Created Successfully"})
});

router.post('/courses', adminMiddleware,async(req, res) => {
 const {title,description,price,imglink}=req.body;
 const Coursedata={title,description,price,imglink};
 const dirgo=await Course.create(Coursedata);
 console.log(dirgo)
 res.status(200).json({msg:"the Course has been created",courseId: dirgo._id})
 });


router.get('/courses', adminMiddleware,async(req, res) =>{
 const response=await Course.find({});
 res.json({
    courses:response
 })
});

module.exports = router;
