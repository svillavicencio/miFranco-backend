const {
  getUsers,
  getUserById,
  getUsersToday,
  getUsersTomorrow,
} = require('../models/user/user.model');

async function getUsersController(req, res) {
  try {
    const result = await getUsers();
    res.status(200).json(result);
  } catch (error) {
    res.status(405).json({ error: error });
  }
}

async function getUserByIdController(req, res) {
  const { id } = req.params;

  try {
    const result = await getUserById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(405).json({ error: error });
  }
}

async function getUsersTodayController(req, res) {
  try {
    const result = await getUsersToday();
    res.status(200).json(result);
  } catch (error) {
    res.status(405).json({ error: error });
  }
}

async function getUsersTomorrowController(req, res) {
  try {
    const result = await getUsersTomorrow();
    res.status(200).json(result);
  } catch (error) {
    res.status(405).json({ error: error });
  }
}
module.exports = {
  getUsersController,
  getUserByIdController,
  getUsersTodayController,
  getUsersTomorrowController,
};
