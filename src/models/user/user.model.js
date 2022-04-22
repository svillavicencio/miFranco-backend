const User = require('./user.schema');

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

module.exports = { createUser, getUsersByGroup, getUsers, getUserById };
