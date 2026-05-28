const {
  getAllUsersService,
  getUserByIdService,
  createUserService,
} = require("../services/userServices");

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await createUserService(username, email, password);
  return res.status(201).json(user);
};

const getAllUsers = async (_, res) => {
  const users = await getAllUsersService();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await getUserByIdService(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json(user);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
