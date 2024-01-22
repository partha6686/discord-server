import { Schema, model, connect, ObjectId } from "mongoose";

interface IServer {
  name: string;
  imageURL?: string;
  inviteCode: string;
  userId: ObjectId;
}

const serverScema = new Schema<IServer>(
  {
    name: { type: String, required: true },
    imageURL: String,
    inviteCode: { type: String, required: true },
    userId: {
        type: Schema.Types.ObjectId,
        default: null,
        ref: "User"
    }
  },
  { timestamps: true }
);


const ServerModel = model<IServer>('Server', serverScema);

module.exports = {ServerModel}