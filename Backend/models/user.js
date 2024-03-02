const mongoose = require("mongoose");
const jwt =require('jsonwebtoken');

const userSchema = mongoose.Schema({
  name: String ,
  email: {type:String,unique:true} ,
  password: {type:String,select:false} ,
  contact: Number ,
  role: String,
  isVerified: {type:Boolean,default:false},
},
{timestamps: true}
);

userSchema.method('generateAuthToken',function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token
})

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
