const routes = require('express').Router();
const { createUser, verifyEmail, sentResetPassToken, CheckResetEmail, resetPass, getEvents } = require('../controllers/userController.js');
const {loginUser} = require('../controllers/authController.js');
const { validateRegister, validateLogin } = require('../middlewares/validator.js');
// const { varifyAuthToken } = require('../middlewares/varifyAuthToken.js');


// Register API
routes.post('/register', validateRegister, createUser);

// Verify Email API
routes.get("/confirmation/:token", verifyEmail);

// Login API
routes.post('/login', validateLogin, loginUser);

// Reset Password OTP API
// routes.post("/get-otp", getOtp);

// Get Events API
// routes.get("/events", varifyAuthToken, getEvents);

routes.post("/send-token", sentResetPassToken);

// Reset Password Email check API
routes.get("/reset-password/:token", CheckResetEmail);

// Reset Password API
routes.post("/reset-pass", resetPass);

module.exports = routes;