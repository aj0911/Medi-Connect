const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//Creating model
const patientSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Name is Mandatory"],
    maxlength: 100,
  },
  Email: {
    type: String,
    required: [true, "Email is Mandatory"],
    unique: true,
    maxlength: 100,
  },
  PasswordHash: {
    type: String,
    required: [true, "Password is Mandatory"],
    maxlength: 255,
    select:false
  }
});

//creating model functions
patientSchema.pre("save", async function(next){
  if (!this.isModified("PasswordHash")) next();
  this.PasswordHash = await bcrypt.hash(this.PasswordHash, 10);
});

patientSchema.methods.comparePassword = async function(pass){
  return bcrypt.compare(pass,this.PasswordHash);
}

module.exports = mongoose.model("PatientModel", patientSchema);