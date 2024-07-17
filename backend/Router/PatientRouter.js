const express = require("express");
const {
  loginPatient,
  registerPatient,
} = require("../Controllers/PatientController");

const router = express.Router();

router.post("/patient/login", loginPatient);
router.post("/patient/register", registerPatient);

module.exports = router;