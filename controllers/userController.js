const User = require('../models/UserModel');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).sort({ name: 'asc' }).orFail();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = getUsers;
