const express = require("express");
const { uploadPDF } = require("../Controllers/PDFController");

const router = express.Router();

router.post("/pdf/upload", uploadPDF);

module.exports = router;