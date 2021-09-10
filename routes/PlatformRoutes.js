const express = require('express');
const PlatformController = require('../controllers/PlatformController');
const VerifyToken = require('../middlewares/AuthMiddleware');

const PlatformRouter = express.Router();

PlatformRouter.get('/', VerifyToken, PlatformController.getPlatforms);
PlatformRouter.post('/', VerifyToken,PlatformController.savePlatform);
PlatformRouter.put('/:id', VerifyToken, PlatformController.updatePlatform);
PlatformRouter.delete('/:id', VerifyToken, PlatformController.deletePlatform);

module.exports = PlatformRouter;