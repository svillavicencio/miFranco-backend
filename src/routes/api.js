const express = require('express');
const basementRouter = require('./basement.routes');

const api = express.Router();
api.use('/basement', basementRouter);

module.exports = api;
