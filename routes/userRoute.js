const { Router } = require("express");
const express = require("express");
const routes = express.Router();
const { body } = require("express-validator");

// require controller
const userController = require("../app/api/controller/userController");

// sign up routes
routes.post(
  "/create-account",
  [
    body("name", "Name Not be empty").notEmpty(),
    body("email", "Email Not be empty").notEmpty(),
    body("email", "Please enter a valid email format").isEmail(),
    body("password", "Password can not be empty").notEmpty(),
    body("password", "Password Length Must be 8-12 characters long").isLength({
      min: 8,
      max: 12,
    }),
    body("cnic", "CNIC number can not be empty").notEmpty(),
    body("cnic", "CNIC must be a number").isNumeric(),
    body("cnic", "CNIC must be equal to 13 digits long").isLength({
      min: 13,
      max: 13,
    }),
    // body("phone", "Phone number can not be empty").notEmpty(),
    // body("phone", "Phone must be a number").isNumeric(),
    // body("phone", "Phone must be equal to 11 digits long ").isLength({
    //   min: 11,
    //   max: 11,
    // }),
  ],
  userController.newAccountCreation
);

routes.put(
  "/verify-account",
  [
    body("email", "Email Not be empty").notEmpty(),
    body("email", "Please enter a valid email format").isEmail(),
    body("otp", "OTP Not be empty").notEmpty(),
    body("otp", "OTP must be consist of digits only").isNumeric(),
    body("otp", "OTP must be consist of 6 digit length").isLength({
      min: 6,
      max: 6,
    }),
  ],
  userController.verifyAccount
);

routes.get(
  "/resend-otp",
  [
    body("email", "Email Not be empty").notEmpty(),
    body("email", "Please enter a valid email format").isEmail(),
  ],
  userController.resendOtp
);

// login or authentication routes
routes.post(
  "/account-log-in",
  [
    body("email", "Email Not be empty").isEmail().notEmpty(),
    body("password", "Password can not be empty").notEmpty(),
  ],
  userController.userLogInAuth
);

// get all user
routes.get(
  "/get-all-users/:user_id",
  userController.getUsers
);

// change user role
routes.put(
  "/change-user-role/:id",
  [
    body("user", "Please Login to perform this action!").notEmpty(),
    body("user_type", "user_type is empty").notEmpty(),
  ],
  userController.updateUserRole
);

module.exports = routes;
