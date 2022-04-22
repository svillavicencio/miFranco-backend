const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  tech: String,
  name: String,
  lastname: String,
  group: String,
  days: [Date],
});

module.exports = mongoose.model('User', userSchema);
