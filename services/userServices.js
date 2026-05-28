const User = require("../models/userModel");

const createUserService = async (username, email, password) => {
  const user = new User({
    username,
    email,
    password,
  });
  return await user.save();
};
const getAllUsersService = async () => {
  const users = await User.find();
  return users;
};

const getUserByIdService = async (id) => {
  const user = await User.findById(id);
  return user;
};

module.exports = {
  getAllUsersService,
  getUserByIdService,
  createUserService,
};
