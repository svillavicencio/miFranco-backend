const { getCalendarDataFromCsv, getGroupDataFromCsv } = require('./csvtojson');
const { createUser } = require('../models/user/user.model');

async function upsert() {
  const group = await getGroupDataFromCsv();
  const calendar = await getCalendarDataFromCsv();

  for (const user of group) {
    const days = calendar
      .map((day) => {
        if (day[user.group]) return day.date;
      })
      .filter((notUndefined) => notUndefined !== undefined);
    user['days'] = days;

    const result = await createUser(user);
    console.log(result);
  }
}

module.exports = { upsert };
