const express = require("express");
const routes = express.Router();

// require controller
const contact = require("../app/api/controller/contactController");
// require body for express validation
const { body } = require("express-validator");

// add contact Query:     /contact/addContactQuery
routes.post(
  "/addContactQuery",
  [
    body("name", "Please enter a name with minimum chracter 5 ").isLength({ min: 5 }),
    body("email", "Please enter a valid email").isEmail(),
    body("phone", "Please enter a phone number of 11 diigts ").isLength({ min: 10, max: 10 }),
    body("message", "Message can not be blank and minimum 50 character is allowed").isLength({ min: 50 }),
  ],
  contact.addContactForm
);

// add contact Query:     /contact/getContacts
routes.get("/getContact/:user_id/:id", contact.getContact);

// view specfic contact Query:     /contact/getContact/:id
routes.get("/getContacts/:user_id", contact.getContactQuery);

module.exports = routes;
