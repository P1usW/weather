import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, require: true},
  weatherHistory: {type: [{city: String, temp: Number, wind: Number, rainfall: Number}]}
});

export default mongoose.model('User', UserModel);