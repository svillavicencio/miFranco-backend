const mongoose = require('mongoose');
const { Schema } = mongoose;

const daySchema = new Schema({
  date: Date,
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Day', daySchema);
