const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = (request, response, next) => {
  bcrypt.hash(request.body.password, 10, function (err, hashedPass) {
    if (err) {
      response.json({
        error: err,
      });
    }
    let user = new userModel({
      username: request.body.username,
      password: hashedPass,
      email: request.body.email,
      phone: request.body.phone,
      profession: request.body.profession,
    });

    user
      .save()
      .then((user) => {
        response.json({
          message: 'User added successfully',
        });
      })
      .catch((error) => {
        response.json(error);
      });
  });
};

const login = (request, response, next) => {
  var username = request.body.username;
  var password = request.body.password;

  userModel.findOne({ username: username }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          response.json({
            error: err,
          });
        }
        if (result) {
          let token = jwt.sign({ username: user.username }, 'verySecretValue', {
            expiresIn: '1h',
          });
          response.status(201).json({ success: true });
        } else {
          response.json({ message: 'Password did not match' });
        }
      });
    } else {
      response.json({
        message: 'No user found',
      });
    }
  });
};

module.exports = { register, login };
