const rentModel = require("../model/reqForRentModel");
const productModel = require("../model/productModel");
const { default: mongoose } = require("mongoose");
const { validationResult } = require("express-validator");
const userModel = require("../model/userModel");

var isOrderApproved;

// const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

const findUserFunction = async (user_id) => {
  console.log("find User Function Called");

  let where = { _id: user_id };
  return await userModel
    .findOne({ user: user_id })
    .then((data) => {
      if (data) {
        return true;
      }
      return false;
    })
    .catch((err) => {
      return false;
    });

  // return await userModel
  //   .findOne({ email: user_email })
  //   .then((data) => {
  //     // return data;
  //     if (data) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //     // return true;
  //     // return res.send(data);
  //   })
  //   .catch((err) => {
  //     // return err;
  //     return false;
  //     // return res.send(err);
  //   });
};

const findProductFunction = async (product_id) => {
  return await productModel
    .findOne({ _id: product_id })
    .then((data) => {
      if (data) {
        return true;
      }
      return false;
      // return res.send(data);
    })
    .catch((err) => {
      return false;
      // return res.send(err);
    });
};

const addRentRequestFunction = async (rentRequest) => {
  console.log("add rent request function is called");
  const req_rent = new rentModel(rentRequest);

  return await req_rent
    .save()
    .then((data) => {
      return res.status(201).json({
        message:
          "Your request to rent this product has been saved successfuly!",
        rented_req: data,
      });
    })
    .catch((err) => {
      // console.log(err);
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    });
};

const updateOrderStatus = async (orderId) => {
  console.log("update Order Status Function is Called");
  console.log("pre", is_order_approved);
  is_order_approved = !is_order_approved;
  console.log("after", is_order_approved);

  return await rentModel
    .findByIdAndUpdate(
      orderId,
      { is_order_approved: is_order_approved },
      { new: true }
    )
    .then((res) => {
      return console.log(res);
    })
    .catch((err) => {
      return console.log(err);
    });
};

const findOrderById = async (orderId) => {
  console.log("find rent order by id function is called");
  // console.log(orderId);

  return await rentModel
    .findById(orderId)
    .then((response) => {
      // return console.log(res);
      // return console.log(response);
      if (response) {
        // console.log(response.is_order_approved)
        isOrderApproved = response.is_order_approved;
        return true;
      }

      // else{
      return false;
      // }
    })
    .catch((error) => {
      return false;
      // return error;
      // return console.log(err);
    });
  // .save()
  // .then((data) => {
  //   return res.status(201).json({
  //     message:
  //       "Your request to rent this product has been saved successfuly!",
  //     rented_req: data,
  //   });
  // })
  // .catch((err) => {
  //   // console.log(err);
  //   return res.status(500).json({
  //     message: "Internal Server Error",
  //     error: err,
  //   });
  // });
};

const rentController = {
  reqForRent: async (req, res) => {
    // console.log("request for rent");
    // res.send("request for rent");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // return res.send("request for rent");

    // return res.send(req.body);
    // var where = { _id: req.body.user };

    // await userModel
    //   .findById(req.body.user)
    //   .then((data) => {
    //     if (!data) {
    //       return res.send("email not found");
    //     }
    //     return res.send(data);
    //   })
    //   .catch((err) => {
    //     return res.send(err);
    //   });

    // await userModel.findOne({user: req.body.user}).then(data=>{
    //   return res.send(data);
    // }).catch(err=>{
    //   return res.send(err);
    // })

    // return await userModel
    //   .findOne({ email: req.body.user })
    //   .then((data) => {
    //     // return true;
    //     return res.send(data);
    //   })
    //   .catch((err) => {
    //     return res.send(err);
    //   });

    //product function called
    // const response = await findProductFunction(req.body.product);
    // if (response) {
    //   return res.status(404).json({
    //     message: "Product found successfuly!",
    //     data: response,
    //   });
    // } else {
    //   return res.status(404).json({
    //     message: "We Could not find product!",
    //     error: response,
    //   });
    // }

    // return res.send("hello bro");
    // call user function called
    let userExist = await findUserFunction(req.body.user);
    let productExist = await findProductFunction(req.body.product);
    // return res.send(userExist);

    if (userExist) {
      // return res.send("user exist");
      if (productExist) {
        // return res.send("product exist");
        const rentRequest = {
          user: req.body.user,
          product: req.body.product,
          rent_duration: req.body.rent_duration,
        };
        const req_rent = new rentModel(rentRequest);

        await req_rent
          .save()
          .then((data) => {
            return res.status(201).json({
              message:
                "Your request to rent this product has been saved successfuly!",
              rented_req: data,
            });
          })
          .catch((err) => {
            // console.log(err);
            return res.status(500).json({
              message: "Internal Server Error",
              error: err,
            });
          });
        // let response = addRentRequestFunction(rent);
        // return res;
      } else {
        return res.status(404).json({
          message: "Could not find any product!",
        });
      }
    } else {
      return res.status(404).json({
        message: "Please login to your account!",
        message2: "we could not find your account!",
      });
      // return res.send('user not exist');
    }

    // if (response) {
    //   // return res.send(response);
    //   // return res.send("user successfuly find");
    //   // const rent = {
    //   //   user: req.body.user,
    //   //   product: req.body.product,
    //   //   rent_duration: req.body.rent_duration,
    //   // };
    //   // let res = await addRentRequestFunction(rent);
    //   // return res;

    // } else {
    //   return res.status(404).json({
    //     message: "We Could not find user",
    //   });
    // }

    // return res.send("user find successfuly");

    // const rent = {
    //   user: req.body.user,
    //   product: req.body.product,
    //   rent_duration: req.body.rent_duration,
    // };

    // const req_rent = new rentModel(rent);

    // return res.send(req_rent);

    // await req_rent
    //   .save()
    //   .then((data) => {
    //     res.status(201).json({
    //       message: "req to rent a product saved successfuly",
    //       rented_req: data,
    //     });
    //   })
    //   .catch((err) => {
    //     // console.log(err);
    //     res.status(500).json({
    //       message: "Internal Server Error",
    //       error: err,
    //     });
    //   });
  },
  changeOrderStatus: async (req, res) => {
    // return res.send("order")
    // return res.send(req.params.order_id);
    const isOrderFind = await findOrderById(req.params.order_id);
    // return console.log(isOrderFind, isOrderApproved)
    // return res.send(isOrderFind);
    if (isOrderFind) {
      // return res.send('order find' );
      // console.log(!isOrderApproved)

       await rentModel
        .findByIdAndUpdate(
          req.params.order_id,
          { is_order_approved: !isOrderApproved },
          { new: true }
        )
        .then((response) => {
        //  return  console.log(res)
          return res.status(201).json({
            message: "Successfuly change order status!",
            data: response,
          });
          // return console.log(res);
        })
        .catch((err) => {
          // return console.log(err);
          return res.status(500).json({
            message: "Internal Server Error",
            error: err,
          });
        });

      //  updateOrderStatus(req.params.order_id);
      // console.log("pre", is_order_approved);
      // is_order_approved = !is_order_approved;
      // console.log("after", is_order_approved);
    } else {
      return res.status(404).json({
        message: "We could not find any order!",
      });
    }
    // await rentModel
    //   .find()
    //   .then((data) => {
    //     res.status(201).json({
    //       message: "req to rent a product saved successfuly",
    //       rented_req: data,
    //     });
    //   })
    //   .catch((err) => {
    //     // console.log(err);
    //     res.status(500).json({
    //       message: "Internal Server Error",
    //       error: err,
    //     });
    //   });
  },
  getRequestedRentalProducts: async (req, res) => {
    await rentModel
      .find()
      .then((data) => {
        res.status(201).json({
          message: "All Data Fetched Successfuly!",
          rented_req: data,
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
};

module.exports = rentController;
