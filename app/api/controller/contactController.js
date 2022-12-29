const { default: mongoose } = require("mongoose");
const userModel = require("../model/userModel");

const contact = require("../model/contactModel");
// require express validation
const { validationResult } = require("express-validator");

const checkUserType = async (user_id) => {
  console.log("check user type function is called");

  let whatIsUserType = await userModel
    .findById(user_id)
    .then((response) => {
      // return response;
      if (response !== null) {
        // return response;
        if (response.user_type === "admin") {
          return true;
        }
      }
      return false;
    })
    .catch((error) => {
      // return error;
      return false;
    });

  return whatIsUserType;
};

const contactController = {
  addContactForm: async (req, res) => {
    // if there is an error occur, then return the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // res.send(req.body.message);
    let cont = new contact({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });
    await cont
      .save()
      .then((contactQuery) => {
        // res.send("success");
        res.status(200).json({
          message: "Successfuly Submited Contact Form",
          query: contactQuery,
        });
      })
      .catch((err) => {
        // console.send("error" + err);
        res.status(200).json({
          message: "Contact Form not submit",
          error: err,
        });
      });
  },
  getContact: async (req, res) => {
    let isUserAdmin = await checkUserType(req.params.user_id);

    if (!isUserAdmin) {
      return res.status(401).json({
        message: "Unauthorized to perform this action!!!",
      });
    }

    // await and find contact Quereies
    await contact
      .find({})
      .then((contactQuereies) => {
        res.status(200).json({
          message: "Successfuly retrive contact form user Queries",
          queries: contactQuereies,
        });
      })
      .catch((err) => {
        res.status(200).json({
          message: "Error got while fetching contact data",
          error: err,
        });
      });
  },
  getContactQuery: async (req, res) => {
    // store id of params into antoher variable

    let isUserAdmin = await checkUserType(req.params.user_id);

    if (!isUserAdmin) {
      return res.status(401).json({
        message: "Unauthorized to perform this action!!!",
      });
    }

    // check that contact is exist or ot
    await contact
      .find()
      .then((data) => {
        return res.status(200).json({
          message: "We Succesfuly get contact detials",
          data: data,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: "Internal Server Error",
          message2: "Maybe Query does not exist",
          error: err,
        });
      });
  },
};

module.exports = contactController;
