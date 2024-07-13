const mongoose = require("mongoose");

//Creating model
const pdfSchema = new mongoose.Schema({
  DoctorID: {
    type: String,
    required: [true, "DoctorID is Mandatory"],
  },
  FilePath: {
    type: String,
    required: [true, "FilePath is Mandatory"],
    maxlength: 255,
  },
  UploadDate: {
    type: Date,
    default:Date.now()
  }
});

//creating model functions


module.exports = mongoose.model("PDFModel", pdfSchema);