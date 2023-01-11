const userModel = require('../models/user.model');

const getUsers = async (request, response) => {
  try {
    const users = await userModel.find();
    response.json(users);
  } catch (error) {
    response.json({ message: error });
  }
};

const userDetail = async (request, response) => {
  try {
    const users = await userModel.findById(request.params.userId);
    response.json(users);
  } catch (error) {
    response.json({ message: error });
  }
};

const createUser = async (request, response) => {
  const user = new userModel({
    username: request.body.username,
    password: request.body.password,
    email: request.body.email,
    phone: request.body.phone,
    profession: request.body.profession,
  });

  try {
    const registeredUser = await user.save();
    response.send(registeredUser);
  } catch (error) {
    response.status(400).send(error);
  }
};

const userLogin = async (request, response) => {
  console.log(`POST request to "/auth/login" received`);
  try {
    const login = await userModel.find({ username: request.data.username });
    response.status(201).json({
      success: true,
    });
  } catch (error) {
    response.status(400).send(error);
  }
};

const updateUser = async (request, response) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      request.params.userId,
      request.body,
      { new: true }
    );
    response.json(updatedUser);
  } catch (error) {
    response.status(400).send(error);
  }
};

const deleteUser = async (request, response) => {
  try {
    const removeUser = await userModel.findByIdAndDelete(request.params.userId);
    response.json(removeUser);
  } catch (error) {
    response.json({ message: error });
  }
};

module.exports = {
  getUsers,
  userDetail,
  createUser,
  updateUser,
  deleteUser,
  userLogin,
};
