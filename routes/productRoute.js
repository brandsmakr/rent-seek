const express = require("express");
const route = express.Router();
// require multer for mutli-part files and other data types
const multer = require("multer");
// ...rest of the initial code omitted for simplicity.
const { body } = require("express-validator");

// category model
const categoryModel = require("../app/api/model/categoryModel");

// require product controller
const prodController = require("../app/api/controller/productController");

// image storage function
const fileStorage = multer.diskStorage({
  // function for decide destionation of file in a request and fall back call(cb)
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  // file name
  filename: function (req, file, cb) {
    // get date and local time
    // let date = new Date();

    // get random numbers in range 1-100
    let rand = Math.floor(Math.random() * 999);

    // console.log("date: ", date, " rand: ", rand, " fileorginal anme: ", file.originalname);

    cb(null, Date.now() + file.originalname);
  },
});

// file filter for example for reject a file if null
const imageFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    // store a file
    // cb(new Error('error message! '), true);
    cb(null, true);
  } else {
    // reject a file
    cb(null, false);
  }
};

// upload image destination
const upload = multer({
  storage: fileStorage,
  limits: {
    // file Sie of 5MB
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: imageFilter,
});

// product post routes: /prod/add-product
route.post(
  "/add-product",
  upload.single("imageOfProduct"),
  [
    // return error if category does not exist
    // body("category")
    //   .notEmpty()
    //   .custom((value, { req }) => {
    //     return categoryModel.fi9*ndById(value).catch((err) => {
    //       if (err) {
    //         return Promise.reject("Category does not exist");
    //       }
    //     });
    //   }),

    // title must be minimum 24 character
    // body(
    //   "category",
    //   "Please select at least one category"
    // ).isEmpty(),
    body("category", "Please select at least one category").isLength({
      min: 1,
    }),
    body("user", "User not found!").isEmpty(),
    body(
      "title",
      "Please enter a title which has minimum 24 characters include spaces"
    ).isLength({ min: 8 }),

    // regular price is in numeric and greater than 0
    body("regular_price", "Regular Price must be a number and greater tha 0")
      .isNumeric()
      .notEmpty(),

    // check body has a image file or not
    body("imageOfProduct", "Image is required with jpeg and png format").custom(
      (value, { req }) => {
        return new Promise((resolve, reject) => {
          if (req.file) {
            if (
              req.file.mimetype === "image/jpeg" ||
              req.file.mimetype === "image/png"
            ) {
              resolve();
            } else {
              reject();
            }
          } else {
            reject();
          }
        });
      }
    ),
  ],
  prodController.newProduct
);

// product get routes: /prod/get-products
route.get("/get-products", prodController.getAllCatProducts);

//get a specfic product:  /prod/get-product/:id
route.get("/get-product/:id", prodController.getProductById);

// product edit routes:    /prod/edit-product/:id
route.put(
  "/update-product/:id",
  // [
  //   body("imageOfProduct", "image must be jpeg and png extenstion").custom((value, { req }) => {
  //     return new Promise((resolve, reject) => {
  //       if (req.file) {
  //         if (
  //           req.file.mimetype === "image/jpeg" ||
  //           req.file.mimetype === "image/png"
  //         ) {
  //           resolve();
  //         } else {
  //           reject();
  //         }
  //       }
  //     });
  //   })
  // ],
  upload.single("imageOfProduct"),
  [body("user", "User not found!").isEmpty()],
  prodController.editAndUpdateProduct
);

// product delte routes:   /prod/delete-product/:id
route.delete("/delete-product/:user_id/:id", prodController.deleteProductById);

module.exports = route;
