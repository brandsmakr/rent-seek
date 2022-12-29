// require category Model
const { default: mongoose } = require("mongoose");
const category = require("../model/categoryModel");
const userModel = require("../model/userModel");

// require validation from express validator
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

var catController = {
  // add categories method
  createNewCategory: async (req, res) => {
    // return res.send(req.body)

    // if there is an error occur, then return the errors
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

    // if category name is already exist return error
    const catName = await category.findOne({ name: req.body.name });
    if (catName) {
      return res.status(403).json({
        message: "Category Already exist",
      });
    }

    const reqdata = { _id: new mongoose.Types.ObjectId() };

    if (req.body.name) {
      reqdata.name = req.body.name;
    }
    if (req.body.title) {
      reqdata.title = req.body.title;
    }
    if (req.body.description) {
      reqdata.description = req.body.description;
    }
    if (req.file) {
      reqdata.imgUrl = req.file.path;
    }

    const cat = new category(reqdata);

    await cat
      .save()
      .then((result) => {
        // console.log(result);
        res.status(201).json({
          message: "category added successfuly",
        });
      })
      .catch((err) => {
        res.status(500).send("Internal Server Error" + err);
      });
  },

  // get categories method
  getAllCategories: async (req, res) => {
    await category
      .find()
      .then((data) => {
        res.status(201).json({
          message: "successfuly Retrive categories",
          categories_data: data,
        });
      })
      .catch((err) => {
        res.status(500).send("Internal Server Error" + err);
      });
  },

  // get specfic category by using its id
  getOnlyOneCategoryById: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // check that request params has an id
    if (req.params.id) {
      var reqId = req.params.id;
    } else {
      return res.status(400).json({
        message: "We couldn't find id of the category",
      });
    }

    // let isUserAdmin = await checkUserType(req.body.user);
    // return res.send(isUserAdmin);
    //  return res.send("check user type");

    // if (!isUserAdmin) {
    //   return res.status(401).json({
    //     message: "Unauthorized to perform this action!!!",
    //   });
    // }

    //  await category
    //   .findById({reqId})
    //   .then((data) => {
    //     res.status(201).json({
    //       message: "successfull retrive category info",
    //       category: data
    //     });
    //   })
    //   .catch((err) => {
    //     res.status(400).json({
    //       message: "Internal Server Error",
    //       message2: "Maybe category doesn't exist",
    //       error: err
    //     })
    //   });

    category.findById(reqId, (err, data) => {
      if (!err) {
        return res.status(201).json({
          message: "successfull retrive category info",
          category: data,
        });
      } else {
        return res.status(400).json({
          message: "Internal Server Error",
          message2: "Maybe category doesn't exist",
          error: err,
        });
      }
    });
  },
  // edit and update specfic category by using its id
  editAndUpdateCategoryByID: async (req, res, next) => {
    // sotred request id into another varaiable

    let isUserAdmin = await checkUserType(req.body.user);
    // return res.send(isUserAdmin);
    //  return res.send("check user type");

    if (!isUserAdmin) {
      return res.status(401).json({
        message: "Unauthorized to perform this action!!!",
      });
    }

    var reqId = req.params.id;

    // check that request params has an id
    // if (!reqId) {
    //   return res.status(400).json({
    //     message: "couldn't find category",
    //   });
    // }

    let isCategoryExist = await checkCategoryExist(reqId);
    // return res.send(isUserAdmin);
    //  return res.send("check user type");

    if (!isCategoryExist) {
      return res.status(403).json({
        message: "Category does not exist",
      });
    }

    // check that category exist or not
    //  let catId = await category.findById({_id: reqId});
    //  catId.then(checkId =>{
    //   return res.send(checkId);
    //  })
    //  catId.catch(err=>{
    //     return res.status(404).json({
    //       message: "Could Not Found Category",
    //       error: err
    //     });
    //  });

    // check the category name is exist or not becuase category name is unique otherwise data would not update
    // const catName =  await category.findOne({name: req.body.name});
    // if(catName)
    // {
    //   return res.status(403).json({
    //     message: "Category Already exist",
    //     message1: "Category name must be unique"
    //   });
    // }

    // intialize an object for storing changed data into it
    let cat_new_data = {};

    // store data into another varaible for update category data
    if (reqId) {
      cat_new_data._id = reqId;
    }
    if (req.body.name) {
      cat_new_data.name = req.body.name;
    }
    if (req.body.title) {
      cat_new_data.title = req.body.title;
    }
    if (req.body.description) {
      cat_new_data.description = req.body.description;
    }
    if (req.file) {
      cat_new_data.imgUrl = req.file.path;
    }

    // check cat_new_data is empty or not
    // if(cat_new_data == null)
    // {
    //   return res.status(403).json({
    //     message: "Nothing would update!"
    //   })
    // }

    const cat = new category(cat_new_data);

    await category
      .findByIdAndUpdate(reqId, cat, { new: true })
      .then((update) => {
        return res.status(200).json({
          message: "category update succesful! ",
          updated_data: update,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: "Noting would be update",
          error: err,
        });
      });
  },
  // delte specfic category by using its id
  deleteCategoryById: async (req, res) => {
    // sotred request id into another varaiable
    var reqId = req.params.id;
    var userId = req.params.user_id;

    // check that request params has an id
    if (!reqId) {
      return res.status(400).json({
        message: "couldn't find category",
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

    let isCategoryExist = await checkCategoryExist(reqId);
    // return res.send(isUserAdmin);
    //  return res.send("check user type");

    if (!isCategoryExist) {
      return res.status(403).json({
        message: "Category does not exist",
      });
    }

    category
      .findByIdAndDelete({ _id: reqId })
      .then((deleteCat) => {
        return res.status(200).json({
          message: "category deleted succesffuly",
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: "category not deleted error got",
          message2: "Internal Server Error",
          error: err,
        });
      });
  },
};

// export whole controller
module.exports = catController;
