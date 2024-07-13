const express = require('express');
const { initializeApp } = require('../Controllers/AppController');

const router = express.Router();

router.get('/',initializeApp);

module.exports = router;