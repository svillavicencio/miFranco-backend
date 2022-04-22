const express = require('express');
const {
  getUsersController,
  getUserByIdController,
} = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('/', getUsersController);
userRouter.get('/:id', getUserByIdController);

module.exports = userRouter;
