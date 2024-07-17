//Importing Statements
const app = require("./app");
const connectDB = require('./Config/database')
const cloudinary = require('cloudinary');

//importing .env files when app is not in production mode
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: ".env" });
}

//Handling uncaughtException
process.on("uncaughtException", (err) => {
  console.log(`message:${err.message}`);
  console.log(
    "Shutting down the server due to the Unhandled Promise Rejection"
  );
  process.exit(1);
});

//Connecting to MongoDB Database
connectDB();

//Connecting to Cloudinary storage
cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
})

//Starting server on PORT = 5500 (default). You can change it from .env file.
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//Handling Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`message:${err.message}`);
  console.log(
    "Shutting down the server due to the Unhandled Promise Rejection"
  );
  server.close(() => {
    process.exit(1);
  });
});
