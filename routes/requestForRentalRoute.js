const express = require("express");
const route = express.Router();
const rentController = require("../app/api/controller/reqForRentController");
const { body } = require("express-validator");

// post request for rent
route.post(
  "/req-for-rent",
  [
    body("user", "login to your account").notEmpty(),
    body("product", "select one product to request for rent").notEmpty(),
    // body("rent_qty", "rented quantity must not be empty and greater than zero").notEmpty(),
    body("rent_duration", "duration must be a number and not be Empty")
      .notEmpty()
      .matches(/\d/),
    // body("rent_duration").custom((value, { req }) => {
    //   return new Promise((resolve, reject) => {
    //     if (req.body.rent_duration === null) {
    //       return Promise.reject("Duration mcan not be null");
    //     } else {
    //       return Promise.resolve();
    //     }
    //   });

    // if (req.body.rent_duration === null) {
    //           return Promise.reject("Duration mcan not be null");
    //         }

    // if(value === null)
    // {
    //     return Promise.reject("Duration mcan not be null");
    // }
    // Promise.resolve()

    // if(value.matches(/\d/))
    // {
    //     return Promise.reject("Duration must be a number");
    // }
    // if(value <= 0)
    // {
    //     return Promise.reject('Duration must be greater than 0');
    // }
    // }),
  ],
  rentController.reqForRent
);

// get request for rent
route.put("/change-order-status/:order_id", rentController.changeOrderStatus);

// get reqest for rent by userEmail
route.get(
  "/get-details-of-requested-rental-products",
  rentController.getRequestedRentalProducts
);

module.exports = route;
