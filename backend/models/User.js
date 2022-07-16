const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

    email: {
      required: true,
      type: String,
      match: /.+\@.+\..+/,
      lowercase: true,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    UserName:{
      type: String
    }
   
  
},{strict:false});



const User = mongoose.model("User", userSchema);

module.exports = User;
