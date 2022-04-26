const User = require('./user.schema');
const moment = require('moment');

async function createUser(user) {
  try {
    const result = await User.create(user);
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function getUsers() {
  try {
    const result = await User.find({}, { days: false, __v: false });
    return result;
  } catch (error) {
    console.error;
  }
}

async function getUsersByGroup(group) {
  try {
    const result = await User.find({ group: group });
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getUserById(id) {
  try {
    const result = await User.findById(id);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getUsersToday() {
  try {
    const data = await User.find({}, { __v: false });

    const listFiltered = data.filter((user) =>
      user.days.some(
        (day) =>
          moment(day).diff(moment(), 'days', true) < 0 &&
          moment(day).diff(moment(), 'days', true) > -1
      )
    );

    const result = listFiltered.map((user) => {
      user.days = user.days.find(
        (day) =>
          moment(day).diff(moment(), 'days', true) < 0 &&
          moment(day).diff(moment(), 'days', true) > -1
      );

      return user;
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getUsersTomorrow() {
  try {
    const data = await User.find({}, { __v: false });

    const listFiltered = data.filter((user) =>
      user.days.some(
        (day) =>
          moment(day).diff(moment(), 'days', true) < 1 &&
          moment(day).diff(moment(), 'days', true) > 0
      )
    );

    const result = listFiltered.map((user) => {
      user.days = user.days.find(
        (day) =>
          moment(day).diff(moment(), 'days', true) < 1 &&
          moment(day).diff(moment(), 'days', true) > 0
      );

      return user;
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createUser,
  getUsersByGroup,
  getUsers,
  getUserById,
  getUsersToday,
  getUsersTomorrow,
};
