const express = require('express');
const UserController = require('../controllers/UserController');
const VerifyToken = require('../middlewares/AuthMiddleware');

const UserRouter = express.Router();

UserRouter.get('/', VerifyToken, UserController.getUsers);
UserRouter.post('/', UserController.saveUser);
UserRouter.put('/:id', VerifyToken, UserController.updateUser);
UserRouter.delete('/:id', VerifyToken, UserController.deleteUser);

module.exports = UserRouter;