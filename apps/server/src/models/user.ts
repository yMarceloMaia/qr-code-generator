import mongoose from "mongoose";
import db from "../database/database";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true
  }
});

const User = db.model("User", UserSchema);

export default User;
