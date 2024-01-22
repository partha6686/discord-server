import { Schema, model, connect } from "mongoose";

interface IUser {
  authId: string;
  name: string;
  email: string;
  imageURL?: string;
}

const userScema = new Schema<IUser>(
  {
    authId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    imageURL: String,
  },
  { timestamps: true }
);


const UserModel = model<IUser>('User', userScema);

module.exports = {UserModel}