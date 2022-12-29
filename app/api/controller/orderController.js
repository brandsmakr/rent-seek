const orderModel = require("../model/orderModel");
// unique id creation for order number
const uniqid = require('uniqid');
// DateCalculator  is used for rent duration calculation
var DateCalculator = require('date-calculator');
// import mongoose 
const { default: mongoose } = require("mongoose");


const order = {
  giveOrAddOrder: async (req, res) => {

    // return res.send({
    //     uniqueid1: uniqid(),
    //     uniqueid2: uniqid('Hello'),
    //     uniqueid3: uniqid('goodbye-') ,
    //     uniqueid4: uniqid.process(),
    //     // I will use this id because it is short and depending on time
    //     uniqueid5: uniqid.time()
    // });

    // get order no using unique id based on time
    let orderno  = uniqid.time();
    // get duration using date calculation
    let rentStart = req.body.rent_start_date;
    let rentEnd = req.body.rent_end_date; 
    
    // console.log(rentStart.slice(0, 4));
    // console.log(rentStart.slice(5,7));
    // console.log(rentStart.slice(8,10));

    // calculate difference between year, month, days of rentStart and rentEnd
    let d_year = rentEnd.slice(0, 4) - rentStart.slice(0, 4);
    let d_month = rentEnd.slice(5,7) - rentStart.slice(5,7) ;
    let d_days = rentEnd.slice(8,10) - rentStart.slice(8,10);

    // let result = console.log("diffrence of year ",d_year, " differnce in months ", d_month,  " difference of days are ", d_days);

    // calculate duration on which a product is gives on rent
    let rented_days = (d_year * 365) + (d_month * 30) + (d_days);

    // total rent 
    let totalRent = 0;

    // a product is not given on rent for more than 30 days, return error if user try to apply
    if(rented_days > 30)
    {
      return res.status(428).json({
        message: "You can only gives rent for 30 days",
        message2: "please see pre-conditions of rents"
      });
    }
    else if(rented_days < 0){
      return res.status(428).json({
        message: "Rent end date is not not less than rent start date",
        message2: "please  acurate your date you, have some misunderstood"
      });
    }
    else{
      // calculate rent if user try to gives rent for 30 days
      totalRent = req.body.rent_per_day * rented_days;
    }

    let totalDiscount = 0;

    if(req.body.discount)
    {
      if(req.body.discount > 10) 
       {
        return res.status(428).json({
          message: "discount is not greater than 10"
        });
       }
       else if(req.body.discount < 0){
        return res.status(428).json({
          message: "discount is not smaller than 0"
        });
       }
      else{
        // calculate total discount of payment
        totalDiscount = totalRent * req.body.discount / 100;
        // calculate totalRent if discount is given
        totalRent = totalRent - totalDiscount;
      }
    }

    // test
      // return res.send("total rent is " + totalRent);

    // intialize any  object to store data
    const new_order = {
      // _id: new mongoose.Types.ObjectId(),
      order_no: orderno,
      user: req.body.user,
      product: req.body.product,
      rent_start_date: rentStart,
      rent_end_date: rentEnd,
      rent_per_day: req.body.rent_per_day,
      total_rent: totalRent
    };

    //  store how many precent discount will given for rent
    if(totalDiscount != 0)
    {
      new_order.discount = req.body.discount;
    }

    // check test
    // return res.send(new_order);

    // intialize db object
    const order = new orderModel(new_order);

    // save order
    await order
      .save()
      .then((orderCreated) => {
        return res.status(200).json({
          message: "order created successfuly",
          order: orderCreated
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: "internal server error",
          error: err,
        });
      });
  },
  getAllOrders: async (req, res)=>{
    // await and find orders detials
    await orderModel.find().then(orders_details=>{
      res.status(200).json({
        message: "Successfuly retrive rented order info",
        orders: orders_details,
      });
    }).catch((err) => {
      res.status(200).json({
        message: "Error got while fetching orders details",
        error: err,
      });
    });
  },
  getOrder: async(req, res)=>{
   // check that request params has an id 
   if(req.params.id)
   {
     var reqId = req.params.id;
   }
   else{
     return res.status(400).json({
       message: "We couldn't find id of the category"
     });
   }

   await orderModel
   .findById({ _id: reqId })
   .then((data) => {
     res.status(201).json({
       message: "successfull retrive ordered info",
       order: data
     });
   })
   .catch((err) => {
     res.status(400).json({
       message: "Internal Server Error",
       message2: "Maybe order doesn't exist",
       error: err
     });
   });
    
  }
};

module.exports = order;
