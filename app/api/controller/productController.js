// require model
const { default: mongoose } = require("mongoose");
const product = require("../model/productModel");
const userModel = require("../model/userModel");

// ...rest of the initial code omitted for simplicity.
const { validationResult } = require("express-validator");
const category = require("../model/categoryModel");

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

const checkCategoryExist = async (category_id) => {
  console.log("check category exist function is called");

  let isCategoryExist = await category
    .findById(category_id)
    .then((response) => {
      // return response
      if (response !== null) {
        return true;
      }
      return false;
    })
    .catch((error) => {
      // return error;
      return false;
    });

  return isCategoryExist;
};

// apis controller of product
const prodCont = {
  // add mew product
  newProduct: async (req, res) => {
    // return error if recive from express validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // return res.send(req.body)

    let isUserAdmin = await checkUserType(req.body.user);
    // return res.send(isUserAdmin);
    //  return res.send("check user type");

    if (!isUserAdmin) {
      return res.status(401).json({
        message: "Unauthorized to perform this action!!!",
      });
    }

    let isCategoryExist = await checkCategoryExist(req.body.category);
    // return res.send(isCategoryExist);
    //  return res.send("check user type");

    if (!isCategoryExist) {
      return res.status(403).json({
        message: "Category does not exist",
      });
    }

    // if regular price is equal to zero then return error
    if (req.body.regular_price <= 0) {
      return res.status(400).json({
        message: "regular price must be greater than 0",
      });
    }

    // initialize an empty object
    let newProd = {
      _id: new mongoose.Types.ObjectId(),
      category: req.body.category,
      title: req.body.title,
      regular_price: req.body.regular_price,
      qty: req.body.qty,
      imgUrls: req.file.path,
    };

    // check that body has description and save it
    if (req.body.description) {
      newProd.description = req.body.description;
    }
    // check that body has rented_price and save it
    if (req.body.rented_price) {
      newProd.rented_price = req.body.rented_price;
    }

    const prod = new product(newProd);

    // save product data and give response to user
    await prod
      .save()
      .then((result) => {
        // console.log(result);
        res.status(201).json({
          message: "product added successfuly",
          data: result,
        });
      })
      .catch((err) => {
        // console.log(err);
        res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      });
  },
  // get all products
  getAllCatProducts: async (req, res) => {
    await product
      .find()
      // .populate("categories")
    //   .populate({
    //     path: "categories",
    //     populate: {
    //        path: "../model/categoryModel.js",
    //        select: { body: 1 }
    //     }
    //  })
      .then((response) => {
        res.status(201).json({
          message: "Sucessfuly retrive product data",
          prod_info: response,
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: "Error got while fetching the product data",
          error: err,
        });
      });

  //     product.
  // find().
  // populate('categories').
  // exec(function (err, story) {
  //   if (err) return handleError(err);
  //   console.log('The author is %s', story.author.name);
  //   return res.send(story)
  //   // prints "The author is Ian Fleming"
  // });

    // product.find({}, (err, prod_data) => {
    //   if (!err) {
    //     res.status(201).json({
    //       message: "Sucessfuly retrive product data",
    //       prod_info: prod_data,
    //     });
    //   } else {
    //     res.status(400).json({
    //       message: "Error got while fetching the product data",
    //       error: err,
    //     });
    //   }
    // });
  },
  // get a specific product
  getProductById: async (req, res) => {
    // store id of params into antoher variable
    let reqId = req.params.id;
    // if request has not id then return error
    if (!reqId) {
      return res.status(404).json({
        message: "Some thing went wrong!",
      });
    }

    // check that product is exist or ot
    // let prodId = await product.findById(reqId);
    // if(!prodId)
    // {
    //   return res.status(404).json({
    //     message: "error got",
    //     message2: "product does not exist"
    //   });
    // }

    await product
      .findById(reqId)
      .then((product_data) => {
        res.status(201).json({
          message: "Successfuly retrive data of product",
          product: product_data,
        });
      })
      .catch((err) => {
        // res.send(err);
        res.status(400).json({
          message: "Error got while fetching data",
          error: err,
        });
      });
  },
  // edit and update product
  editAndUpdateProduct: async (req, res) => {
    // return res.send("hello g")
    // if there is an error occur, then return the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // return res.send("hello g")

    // store id of params into antoher variable
    let reqId = req.params.id;
    // if request has not id then return error
    if (!reqId) {
      return res.status(404).json({
        message: "Some thing went wrong!",
      });
    }

    let isUserAdmin = await checkUserType(req.body.user);
    // return res.send(isUserAdmin);
    //  return res.send("check user type");

    if (!isUserAdmin) {
      return res.status(401).json({
        message: "Unauthorized to perform this action!!!",
      });
    }

    // check that product is exist or ot
    let prodId = await product.findById(reqId);
    if (!prodId) {
      return res.status(404).json({
        message: "error got",
        message2: "product does not exist",
      });
    }




    // return res.send(prodId);

    // intialize an empty object
    const new_prod = { _id: reqId };

    // store requested data into initialized objects
    if (req.body.category) {
      new_prod.category = req.body.category;
    }
    if (req.body.title) {
      new_prod.title = req.body.title;
    }
    if (req.body.description) {
      new_prod.description = req.body.description;
    }
    if (req.body.regular_price) {
      new_prod.regular_price = req.body.regular_price;
    }
    if (req.body.rented_price) {
      new_prod.rented_price = req.body.rented_price;
    }
    if (req.body.qty) {
      new_prod.qty = req.body.qty;
    }
    if (req.file) {
      new_prod.imgUrls = req.file.path;
    }

    // initalize a db object to update data
    // const prod = new product(new_prod);

    // return res.send(prod);

    // find product and update it
    await product
      .findByIdAndUpdate(reqId, new_prod, { new: true })
      .then((update) => {
        // res.send("data updated sucessfuly " + update);
        res.status(201).json({
          message: "Product updated sucessfuly!",
          product: update,
        });
      })
      .catch((err) => {
        // res.send("error got while fetching data " + err);
        res.status(400).json({
          message: "Product not updated!",
          error: err,
        });
      });
  },
  // delete an product
  deleteProductById: async (req, res) => {
    // store id of params into antoher variable
    let reqId = req.params.id;
    var userId = req.params.user_id;

    // if request has not id then return error
    if (!reqId) {
      return res.status(404).json({
        message: "Some thing went wrong!",
      });
    }

    let isUserAdmin = await checkUserType(userId);
    // return res.send(isUserAdmin);
    //  return res.send("check user type");

    if (!isUserAdmin) {
      return res.status(401).json({
        message: "Unauthorized to perform this action!!!",
      });
    }

    // check that product is exist or ot
    let prodId = await product.findById(reqId);
    if (!prodId) {
      return res.status(404).json({
        message: "error got",
        message2: "product does not exist",
      });
    }

    // console.log(reqId);
    await product
      .findByIdAndDelete({ _id: reqId })
      .then((del) => {
        res.status(200).json({
          message: "product deleted succesfuly",
          deleted_product: del,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "internal server error",
          error: err,
        });
      });
  },
};

module.exports = prodCont;
