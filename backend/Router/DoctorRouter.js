const express = require("express");
const {
  loginDoctor,
  registerDoctor,
} = require("../Controllers/DoctorController");

const router = express.Router();

router.post("/doctor/login", loginDoctor);
router.post("/doctor/register", registerDoctor);

module.exports = router;
