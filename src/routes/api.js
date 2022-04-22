const express = require('express');
const basementRouter = require('./basement.routes');
const userRouter = require('./user.routes');

const api = express.Router();
api.use('/basement', basementRouter);
api.use('/users', userRouter);

module.exports = api;
