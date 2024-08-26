const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
JWT_SECRET = "testingsecret";
const fetchUser = require('../middleware/fetchUser');

// ROUTE 1 :create a user using POST : api/auth/createUser  , doesnt require auth
router.post('/createUser', async (req, res) => {

   try {
      // check wether the user email already exists
      let testUser = await User.findOne({ email: req.body.email })
      if (testUser) {
         return res.status(400).json({ error: "User with this email already exists , Enter a unique email" })
      }
      // salt pepper & hash 
      const salt =  await bcrypt.genSalt(10);

      secPassword = await bcrypt.hash(req.body.password , salt)
      // creating a new user 
      let user = await User.create({
         name: req.body.name,
         email: req.body.email,
         password: secPassword
      })
     
    //  creating and sending a jwt for secure authentication
    const data = {
      user : {
         id : user.id
      }
    }
    const authToken =  jwt.sign(data , JWT_SECRET)
    console.log(authToken)
     res.send({authToken})
   }
   catch (error) {
      console.error(error.message)
      res.status(500).json({error : "Internal error occured"})

   }

})

// ROUTE 2 :authenticate a user using POST : api/auth/login   , no login required
router.post('/login' , async (req, res) => {

 
    const {email , password} = req.body ;
  
    try{
      // comparing email and password to verify user 
      let user = await User.findOne({email})
      if(!user){
        return res.status(400).json({error : "Please enter correct credentials"})
        
      }
      // compares the current password which the user entered to the password stored in the database
      const passwordCompare = await bcrypt.compare(password , user.password);
      if(!passwordCompare){
          return res.status(400).json({error : "Please enter correct credentials"})
      }
      // jwt authentication and then sending the authtoken to the user when he tries to login 
      const data = {
         user : {
            id : user.id
         }
       }
       const authToken =  jwt.sign(data , JWT_SECRET)
   
        res.send({authToken})
      
    }
    catch (error){
      console.error(error.message)
      res.status(500).json({error : "Internal error occured"})
    }


})

// ROUTE 3 : get loggedIn user details using POST : api/auth/getUser , login reuqired
router.post('/getUser' , fetchUser , async (req,res) => {
   try{
      userId = req.user.id
      const user = await User.findById(userId).select("-password")
      res.send(user)
    }
    catch (error){
       console.error(error.message)
       res.status(500).json({error : "Internal error occured"})
    }
    
})

module.exports = router