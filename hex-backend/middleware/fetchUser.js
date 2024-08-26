const jwt = require('jsonwebtoken');
JWT_SECRET = "testingsecret"

fetchUSer = (req , res  , next) => {
    try{
        const token = req.header('auth-token')
        if(!token){
           return res.status(401).send({error : "please authenticate using valid token"})
        }
        // get the user from the jwt token and add id to req object 
       const data = jwt.verify(token , JWT_SECRET)
        req.user = data.user
        next();
    }
   
   
    catch {
      return  res.status(401).send({error : "please authenticate using valid token"})
    }
   
}

module.exports = fetchUSer
