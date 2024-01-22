import { Schema, model, connect, ObjectId } from "mongoose";

interface IMember {
  role: string;
  userId: ObjectId,
  serverId: ObjectId
}

const memberScema = new Schema<IMember>(
  {
    role: { type: String, required: true, enum: ["ADMIN", "MODERATOR", "GUEST"] },
    userId: {
        type: Schema.Types.ObjectId,
        default: null,
        ref: "User"
    },
    serverId: {
        type: Schema.Types.ObjectId,
        default: null,
        ref: "Server"
    }
  },
  { timestamps: true }
);


const MemberModel = model<IMember>('Member', memberScema);

module.exports = {MemberModel}