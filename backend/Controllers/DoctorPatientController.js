const CatchAsyncErrors = require("../Middlewares/CatchAsyncErrors");
const PDFModel = require("../Models/DoctorPatientModel");

exports.linkPatient = CatchAsyncErrors(async (req, res) => {
  const { DoctorID, PatientID } = req.body;
  const doctorPatient = await PDFModel.create({
    DoctorID,
    PatientID
  });
  res.status(200).json({
    success: true,
    message: "Pateint linked successfully with doctor.",
    data: doctorPatient,
  });
});