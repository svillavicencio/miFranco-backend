const express = require('express');
const cors = require('cors');
const api = require('./routes/api');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());

app.use('/', api);

module.exports = app;
