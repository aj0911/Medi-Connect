const CatchAsyncErrors = require("../Middlewares/CatchAsyncErrors");
const PDFModel = require("../Models/PDFModel");
const cloudinary = require("cloudinary");

exports.uploadPDF = CatchAsyncErrors(async (req, res) => {
  const { DoctorID, file_path } = req.body;
  const myCloud = await cloudinary.v2.uploader.upload(file_path, {
    folder: "PDFs",
    resource_type: "raw", //For Non img type data
  });
  const pdf_data = await PDFModel.create({
    DoctorID,
    FilePath: myCloud.secure_url,
  });
  res.status(200).json({
    success: true,
    message: "File Uploaded Successfully",
    data: pdf_data,
  });
});
