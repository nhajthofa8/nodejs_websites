const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  isAdmin:{ type:Boolean,default: false,required: true},
  access_token: { type: String, required: true},
  refresh_token: { type: String, required: true}
},

{
    timestamps:true
}

);

const User = mongoose.model('User', userSchema);

module.exports = User;