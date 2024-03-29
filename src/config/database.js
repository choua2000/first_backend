const mongoose = require("mongoose");
// require('dotenv').config();
const url =
  "mongodb+srv://chouavang:chouavang@cluster0.egqgukp.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connect Database MongoDB");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connect;
