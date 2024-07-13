const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//Creating model
const doctorSchema = new mongoose.Schema({
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
  },
  Specialty: {
    type: String,
    required: [true, "Speciality is Mandatory"],
    maxlength: 100,
  },
});

//creating model functions
doctorSchema.pre("save", async (next) => {
  if (!this.isModified("PasswordHash")) next();
  this.PasswordHash = await bcrypt.hash(this.PasswordHash, 10);
});

doctorSchema.methods.comparePassword = async (pass) =>
  await bcrypt.compare(pass, this.PasswordHash);

module.exports = mongoose.model("DoctorModel", doctorSchema);
