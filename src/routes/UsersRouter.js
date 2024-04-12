const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UsersControllers');
const { authMiddleWare, authUserMiddleWare } = require("../middlewares/authMiddleware");
router.post('/sign-up', userController.createUser)
router.post('/sign-in', userController.loginUser)
module.exports = router
