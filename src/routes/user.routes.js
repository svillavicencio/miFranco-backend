const express = require('express');
const {
  getUsersController,
  getUserByIdController,
  getUsersTodayController,
  getUsersTomorrowController,
} = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('/', getUsersController);
userRouter.get('/today', getUsersTodayController);
userRouter.get('/tomorrow', getUsersTomorrowController);
userRouter.get('/:id', getUserByIdController);

module.exports = userRouter;
