const express = require('express');
const router = express.Router();

const searchControllers = require('../app/Controllers/SearchControllers');

router.use('/', searchControllers.index);

module.exports = router;
