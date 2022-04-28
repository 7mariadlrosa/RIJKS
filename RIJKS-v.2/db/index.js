const mongoose = require("mongoose");
const UserModel = require("../models/User.model");
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/RIJKS";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    return UserModel.deleteMany()
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });