const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  googleId: { type: String },
  name: { type: String },
  subscription: { 
    plan: String,
    status: { type: String, default: 'inactive' } // Default to 'inactive'
  }
});



module.exports = mongoose.model('User', UserSchema);
