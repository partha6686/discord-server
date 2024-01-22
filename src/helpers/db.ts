let mongoose = require("mongoose");

const connectMongo = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("MongoDB Atlas Connected successfully!");
};

module.exports = connectMongo;