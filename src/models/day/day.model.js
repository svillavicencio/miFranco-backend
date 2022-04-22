const Day = require('./day.schema');

async function createDay(day) {
  try {
    const result = await Day.create(day);
    return result;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createDay,
};
