import { Schema, model, connect, ObjectId } from "mongoose";

interface IChannel {
  name: string;
  type: string;
  userId: ObjectId,
  serverId: ObjectId
}

const channelScema = new Schema<IChannel>(
  {
    name: {type: String, required: true},
    type: { type: String, required: true, enum: ["TEXT", "AUDIO", "VIDEO"] },
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


const ChannelModel = model<IChannel>('Channel', channelScema);

module.exports = {ChannelModel}