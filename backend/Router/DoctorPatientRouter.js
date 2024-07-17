const express = require("express");
const { linkPatient } = require("../Controllers/DoctorPatientController");

const router = express.Router();

router.post("/doctorpatent/link", linkPatient);

module.exports = router;