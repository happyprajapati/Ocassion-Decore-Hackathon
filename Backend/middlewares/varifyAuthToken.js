const jwt = require('jsonwebtoken')
const varifyAuthToken = async(req,res,next)=>{
    const token = req.headers['authorization']
    if(token == null) 
        return res.status(401).json({success:false, data:{ message: "Token not found." } })
    // const checktoken = 
    jwt.verify(token, process.env.JWT_SECRET, function (err){
        if(err){
            return res.status(401).json({success:false, data:{ message: "Invalid token." } })
            next();
        }
    })
    // if(checktoken == null)
}

module.exports = {varifyAuthToken}