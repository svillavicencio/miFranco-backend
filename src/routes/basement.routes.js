const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '.xslx');
  },
});
const upload = multer({ storage: storage });

const {
  postNewBasementController,
} = require('../controllers/basement.controller');

const basementRouter = express.Router();

basementRouter.post('/', upload.single('file'), postNewBasementController);

basementRouter.get('/', (req, res) => {
  res.json({ msg: 'test' });
});
module.exports = basementRouter;
