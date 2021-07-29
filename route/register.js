const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");


router.post("/addUser", (req, res) => {
  User.findOne({ email: req.body.userEmail }).then((user) => {
    if (user) {
      return res.status(400).json({status: 'error',error:"Email already exists"});
    } else {
      // console.log(req);
      const newUser = new User({
        email: req.body.userEmail,
      });
        newUser.save();
    }
  }).then(user=> res.json({message:"Subscribed successfully"}))
  .catch((e)=>{console.log(e)})
  });

module.exports = router;
