const express = require('express');
const AuthController = require('../controllers/AuthController');
const VerifyToken = require('../middlewares/AuthMiddleware');

const AuthRouter = express.Router();

AuthRouter.post('/login', AuthController.login);
AuthRouter.get('/user', VerifyToken, AuthController.user);

module.exports = AuthRouter;