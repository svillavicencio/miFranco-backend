const {
  getCalendarDataFromCsv,
  getGroupDataFromCsv,
} = require('./utils/csvtojson');

const { mongoConnect } = require('./services/mongo');
const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

async function startServer() {
  // const data1 = await getCalendarDataFromCsv();
  // const data2 = await getGroupDataFromCsv();
  await mongoConnect();
  // console.log(data2);
  server.listen(PORT, () => {
    console.log(`Listening PORT: ${PORT}`);
  });
}

startServer();
