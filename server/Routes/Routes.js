const path = require('path');
const express = require('express');
const router = express.Router();
const signupController = require('../Controllers/signupController')
const loginController = require('../Controllers/loginController')

//handling the "/signup " requests from here
router.post('/signup' , signupController.postSignup);
// router.get('/signup' , signupController.getSignup);


//handling the "/login " requests from here
router.post('/login' , loginController.postLogin)


module.exports = router


