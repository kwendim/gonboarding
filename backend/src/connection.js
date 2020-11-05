const mongoose = require("mongoose");

const User = require("./User.model");
console.log(process.env.MONGO_URL)
const connection = process.env.MONGO_URL;

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
