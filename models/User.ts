import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  userRegdNo: number;
  password: string;
  batch:number
}

// Updated User schema
const UserSchema: Schema<User> = new mongoose.Schema({
  userRegdNo: {
    type: Number,
    required: [true, "UserRegdNO is required"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  batch:{
    type: Number,
    required: [true, "batch info is required"],
    trim: true,
    unique: true,
  }
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
