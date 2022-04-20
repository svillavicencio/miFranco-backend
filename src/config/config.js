const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });
module.exports = {
  mongourl: process.env.MONGO_URL,
};
