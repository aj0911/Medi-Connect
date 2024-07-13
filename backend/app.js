//Importing statements
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const ErrorMiddlewares = require('./Middlewares/Error')

//Making objects
const app = express();
const corsConfig = {
  origin: true,
  credentials: true,
};

//Importing middlewares
app.use(cors(corsConfig));
app.use("*", cors(corsConfig));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload());

//Importing router
const AppRouter = require('./Router/AppRouter')

//Using Routers
app.use(AppRouter)

//Using middlewares for erros
app.use(ErrorMiddlewares)


module.exports = app;
