const CatchAsyncErrors = require("../Middlewares/CatchAsyncErrors");
const PatientModel = require("../Models/PatientModel");
const ErrorHandler = require("../utils/ErrorHandler");

exports.loginPatient = CatchAsyncErrors(async (req, res, next) => {
  const { Email, PasswordHash } = req.body;
  const patient = await PatientModel.findOne({ Email }).select("+PasswordHash");
  if (patient && (await patient.comparePassword(PasswordHash)))
    res.status(200).json({
      success: true,
      message: "Successfully logged In",
      data: patient,
    });
  else return next(new ErrorHandler("Incorrect username or password.", 401));
});

exports.registerPatient = CatchAsyncErrors(async (req, res, next) => {
  const { Name, Email, PasswordHash } = req.body;
  const pateint_exist = await PatientModel.findOne({ Email });
  if (pateint_exist)
    return next(new ErrorHandler("Email already exists.", 401));
  const patient = await PatientModel.create({
    Name,
    Email,
    PasswordHash,
  });
  res.status(200).json({
    success: true,
    message: "Successfully Registered",
    data: patient,
  });
});
