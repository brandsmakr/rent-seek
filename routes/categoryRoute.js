// require express
const express = require("express");
const route = express.Router();

// ...rest of the initial code omitted for simplicity.
const { body } = require("express-validator");

// require multer for mutli-part files and other data types
const multer = require("multer");

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

// require category controller
const catController = require("../app/api/controller/categoryController");

// post category via route:  /cat/add-category
route.post(
  "/add-category",
  upload.single("imageOfCat"),
  [
    body("user", "Please Login to perform this action!").notEmpty(),
    body("name", "Category name is required").isLength({ min: 3 }),
  ],
  catController.createNewCategory
);

// get category via route:  /cat/get-categories
route.get("/get-categories", catController.getAllCategories);

// get a specific category via route: /cat/get-category/:id
route.get("/get-category/:id", catController.getOnlyOneCategoryById);

// update a specific category:  /cat/edit-category/:id
route.put(
  "/update-category/:id",
  upload.single("imageOfCat"),
  [
    body("name", "Category name is required").isLength({ min: 3 }),
    body("user", "user not be empty").isEmpty(),
  ],
  catController.editAndUpdateCategoryByID
);

// delete a specfic category: /cat/delete-category/:id
route.delete(
  "/delete-category/:user_id/:id",
  catController.deleteCategoryById
);

// export router
module.exports = route;
