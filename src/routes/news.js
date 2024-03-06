const express = require('express');
const router = express.Router();

const newsController = require('../app/Controllers/NewsControllers');
const searchControllers = require('../app/Controllers/SearchControllers');

router.use('/search', searchControllers.index);
router.use('/', newsController.index);

module.exports = router;
