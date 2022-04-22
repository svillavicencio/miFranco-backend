const { upsert } = require('./utils/upsert');

const { mongoConnect } = require('./services/mongo');
const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  // await upsert();
  server.listen(PORT, () => {
    console.log(`Listening PORT: ${PORT}`);
  });
}

startServer();
