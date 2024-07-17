const CatchAsyncErrors = require("../Middlewares/CatchAsyncErrors");
const DoctorModel = require("../Models/DoctorModel");
const ErrorHandler = require("../utils/ErrorHandler");

exports.loginDoctor = CatchAsyncErrors(async (req, res, next) => {
  const { Email, PasswordHash } = req.body;
  if (!Email || !PasswordHash)
    return next(new ErrorHandler("Email and Password both required.", 401));
  const doctor = await DoctorModel.findOne({ Email }).select('+PasswordHash');
  if (doctor && (await doctor.comparePassword(PasswordHash)))
    res.status(200).json({
      success: true,
      message: "Successfully logged In",
      data: doctor,
    });
  else return next(new ErrorHandler("Incorrect username or password.", 401));
});

exports.registerDoctor = CatchAsyncErrors(async (req, res, next) => {
  const { Name, Email, PasswordHash, Specialty } = req.body;
  const doctor_exist = await DoctorModel.findOne({ Email });
  if (doctor_exist) return next(new ErrorHandler("Email already exists.", 401));
  const doctor = await DoctorModel.create({
    Name,
    Email,
    PasswordHash,
    Specialty,
  });
  res.status(200).json({
    success: true,
    message: "Successfully Registered",
    data: doctor,
  });
});
