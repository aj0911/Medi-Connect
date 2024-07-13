const mongoose = require("mongoose");

//Creating model
const doctorPatientSchema = new mongoose.Schema({
  DoctorID: {
    type: String,
    required: [true, "DoctorID is Mandatory"],
  },
  PatientID: {
    type: String,
    required: [true, "PatientID is Mandatory"],
  }
});

//creating model functions


module.exports = mongoose.model("DoctorPatientModel", doctorPatientSchema);