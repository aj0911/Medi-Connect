//Importing Statement
const mongoose = require("mongoose");

//connecting it with localhost db
const connectDB = () => {
  mongoose.connect(process.env.DB_URI).then((data) => {
    console.log(
      `Mongo Db is connected with the server: ${data.connection.host}`
    );
  });
};

module.exports = connectDB;
