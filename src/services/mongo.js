const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connection.once('open', () => {
  console.log(`Mongo connected!`);
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(config.mongourl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
