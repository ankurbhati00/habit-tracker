import mongoose from "../../config/mongoose/mongoose.config.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bedTime: {
    type:String
  },
  weeks:[]
});

export const User = mongoose.model("User", userSchema);
