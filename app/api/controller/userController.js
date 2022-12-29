const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const twilio = require("twilio");
const accountSid = "ACfb3620df0ebad47ddc13f68c99d4398d"; // Your Account SID from www.twilio.com/console
const authToken = "c25d8bce8c0b4e388e2fc9da437be665";
const client = require("twilio")(accountSid, authToken);
const nodemailer = require("nodemailer");
// require validation from express validator
const { validationResult } = require("express-validator");
var userId = "";
var userOtp = "";
// const SMS = require("node-sms-send");

function generateOTP() {
  // Declare a digits variable
  // which stores all digits
  var digits = "123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

function sendSMS(userData) {
  console.log("sendSMS Called");
  //var userData = req.body
  if (userData.phoneNumber) {
    client.verify
      .services(process.env.SERVICE_ID)
      .verifications.create({
        to: `+${userData.phoneNumber}`,
        channel: "sms",
      })
      .then((data) => {
        //console.log('sms sent')
        //console.log(data)
        /* res.status(200).send({
                  message: "Verification is sent!!",
                  phonenumber: userData.phonenumber,
                  data
              }) */

        return {
          message: "Verification is sent!!",
          phoneNumber: userData.phoneNumber,
          data,
        };
      });
  } else {
    /* res.status(400).send({
          message: "Wrong phone number :(
",
          phonenumber: userData.phonenumber,
          data
      }) */
    console.log("error");
    return {
      message: "Wrong phone number ",
      phoneNumber: userData.phoneNumber,
      data,
    };
  }
} //end sendSMS

var verifyPhoneNumber = async (req, res) => {
  try {
    let userData = req.body;
    if (userData.phoneNumber && userData.code.length === 6) {
      client.verify
        .services(process.env.SERVICE_ID)
        .verificationChecks.create({
          to: `+${userData.phoneNumber}`,
          code: userData.code,
        })
        .then((data) => {
          if (data.status === "approved") {
            var message = "User is Verified!!";
            responseHelper.success(res, data, message);
          }
        });
    } else {
      /* res.status(400).send({
              message: "Wrong phone number or code :(
",
              phonenumber: userData.phonenumber,
              data
          }) */

      var err = {
        message: "Wrong phone number or code :",
        phoneNumber: userData.phoneNumber,
        data,
      };

      responseHelper.requestfailure(res, err);
    }
  } catch (err) {
    responseHelper.requestfailure(res, err);
  }
}; //end function

let transporter = nodemailer.createTransport({
  host: "mail.made-easy.ch",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "app@facecard.ch", // generated ethereal user
    pass: "Xk28zn94$6", // generated ethereal password
  },
});

const verifyEmail = async (email, OTP) => {
  let info = await transporter.sendMail({
    from: "app@facecard.ch", // sender address
    to: email, // list of receivers
    subject: "Verification Code ✔", // Subject line
    text: `Your account has been sucessfuly Created!`, // plain text body
    html: `<h3>Verify to Login your Account!</h3></br>
    <img src="https://landing.engotheme.com/html/ecome/demo/img/banner/h3_b1.jpg" alt="Rent Seek Banner"/></br>
    <h4>Verification Code:<b> ${OTP}</b></h4></br>
    <h2>by <b>Rent Seek</b> </h2>`, // html body
  });

  if (info.messageId) {
    console.log("Message sent: %s", info.messageId);
  } else {
    console.log("Some Error Occurred while sending verification code");
  }
  return info;
};

const checkUserExist = async (user_email) => {
  console.log("check user already exist function is called");
  let isUserExist = await userModel
    .findOne({ email: user_email })
    .then((response) => {
      // return response
      if (response !== null) {
        userId = response.id;
        userOtp = response.otp;
        return true;
      }
      return false;
    })
    .catch((error) => {
      // return error;
      return false;
    });

  return isUserExist;
};

const checkCnicExist = async (user_cnic) => {
  console.log("check user cnic already exist function is called");
  let isCnicExist = await userModel
    .findOne({ cnic: user_cnic })
    .then((response) => {
      // return response
      if (response === null) {
        return true;
      }
      return false;
    })
    .catch((error) => {
      // return error;
      return false;
    });

  return isCnicExist;
};

const checkPhoneExist = async (user_phone) => {
  console.log("check  user phone has already exist function is called");
  let isPhoneExist = await userModel
    .findOne({ phone: user_phone })
    .then((response) => {
      // return response
      if (response === null) {
        return true;
      }
      return false;
    })
    .catch((error) => {
      // return error;
      return false;
    });

  return isPhoneExist;
};

const verifyOtp = async (user_email, user_otp) => {
  console.log("verify otp function is called");
  let isOtpIsCorrect = await userModel
    .findOne({ email: user_email })
    .then((response) => {
      // return response
      if (response !== null) {
        if (response.otp == user_otp) {
          return true;
        }
        return false;
      }
      return false;
    })
    .catch((error) => {
      // return error;
      return false;
    });

  return isOtpIsCorrect;
};

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

const checkUserVerfied = async (user_id) => {
  console.log("check user verification function is called");

  let isUserVerified = await userModel
    .findById(user_id)
    .then((response) => {
      // return response
      if (response !== null) {
        return response.user_verified;
      }
      return false;
    })
    .catch((error) => {
      // return error;
      return false;
    });

  return isUserVerified;
};

const userController = {
  newAccountCreation: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // res.send(req.body);
    // console.log(req.body);
    // return res.send(generateOTP());
    const OTP = generateOTP();
    // const sms = new SMS();

    // sms
    //   .send("+923041432583", `Hello  I am OTP! ${OTP}`)
    //   .then((body) => console.log(body))
    //   .catch((err) => console.log(err.message));
    // client.messages
    //   .create({
    //     body: `Hello from Node! ${OTP}`,
    //     to: "+923041432583", // Text this number
    //     from: "+923041432583", // From a valid Twilio number
    //   })
    //   .then((message) => {
    //     console.log(message.sid);
    //     return res.send(message);
    //   }).catch(err=>{
    //     console.log(err);
    //     return res.send(err)
    //   });
    // const userData = {
    //   phoneNumber: "+923041432583",
    //   email: "brandsmakr8@gmail.com",
    // };
    // sendSMS(userData)

    // let info = await transporter.sendMail({
    //   from: "app@facecard.ch", // sender address
    //   to: req.body.email, // list of receivers
    //   subject: "Verification Code ✔", // Subject line
    //   text: `Your account has been sucessfuly Created!`, // plain text body
    //   html: `<h3>Verify to Login your Account!</h3></br>
    //   <img src="https://landing.engotheme.com/html/ecome/demo/img/banner/h3_b1.jpg" alt="Rent Seek Banner"/></br>
    //   <h4>Verification Code:<b> ${OTP}</b></h4></br>
    //   <h2>by <b>Rent Seek</b> </h2>`, // html body
    // });

    //initialize
    // const sms = require('sms-service');
    // const smsService = new sms.SMSService();

    //  smsService.sendSMS('+923041432583',`hello from sms-service! ${OTP}`);

    // return res.send(req.body.email)
    // await userModel
    //   .findOne({ email: req.body.email })
    //   .then((response) => {
    //     return res.send(response);
    //   })
    //   .catch((err) => {
    //     return res.send(err);
    //   });

    let isUserExist = await checkUserExist(req.body.email);
    // console.log(response);
    // return res.send(response);

    // return res.send(checkUserExist(req.body.email))
    // const response = checkUserExist(req.body.email);
    // return res.send(response);
    if (isUserExist) {
      return res.status(302).json({
        message: "Email Already Registerred. Please check email again!",
      });
    }

    let isCnicExist = await checkCnicExist(req.body.cnic);

    if (!isCnicExist) {
      return res.status(302).json({
        message: "The cnic entered is already exist!",
      });
    }

    // let isPhoneExist = await checkPhoneExist(req.body.phone);

    // if (!isPhoneExist) {
    //   return res.status(302).json({
    //     message: "The phone number is already exist!",
    //   });
    // }

    const user = new userModel({
      // _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      adress: req.body.adress,
      cnic: req.body.cnic,
      // phone: req.body.phone,
      otp: OTP,
    });
    user
      .save()
      .then((account) => {
        // res.send(account);
        verifyEmail(req.body.email, OTP);
        res.status(200).json({
          message: "Account Created. Please check e-mail & verify account!",
          data: account,
        });
      })
      .catch((err) => {
        // res.send(err);
        return res.status(500).json({
          message: "User Account Not Registerred",
          error: err,
        });
      });
  },
  verifyAccount: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let isEmailExist = await checkUserExist(req.body.email);
    if (!isEmailExist) {
      return res.status(404).json({
        message: "We could not find  email!",
      });
    }

    let isOtpCorrect = await verifyOtp(req.body.email, req.body.otp);
    if (!isOtpCorrect) {
      return res.status(400).json({
        message: "Entered a wrong OTP!!!",
      });
    }

    // return res.send(isOtpCorrect);

    if (userId !== null) {
      await userModel
        .findByIdAndUpdate(userId, { user_verified: true }, { new: true })
        .then((response) => {
          userId = "";
          return res.status(201).json({
            message: "Account Verfied Succesfuly!",
            data: response,
          });
        })
        .catch((err) => {
          return res.status(500).json({
            message: "Account Not Verified",
            error: err,
          });
        });
    }
  },
  resendOtp: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let isEmailExist = await checkUserExist(req.body.email);
    if (!isEmailExist) {
      return res.status(404).json({
        message: "We could not find  email!",
      });
    }

    if (userOtp !== null) {
      let isEmailSend = await verifyEmail(req.body.email, userOtp);
      console.log(isEmailSend);
      if (isEmailSend.messageId) {
        return res.status(201).json({
          message: "Email sent successfuly",
          mail: isEmailSend.accepted,
        });
      }
    }
  },
  userLogInAuth: async (req, res) => {
    // console.log('hello');
    // res.send('hello');

    // return error if recive from express validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // return res.send(req.body)

    let isUserExist = await checkUserExist(req.body.email);
    if (!isUserExist) {
      return res.status(400).json({
        message: "Email not found!",
      });
    }

    // we have to check here that user is verified or not , if user is not verified then not allowed to login
    let isUserVerified = await checkUserVerfied(userId);
    if (!isUserVerified) {
      return res.status(400).json({
        message: "Please verify email account before login!",
      });
    }

    userModel.findOne({ email: req.body.email }, function (err, userInfo) {
      if (err || "") {
        // res.send("oops something went wrong while login to your account!!!!" + err);
        return res.status(400).json({
          message: "oops something went wrong while login to your account!!!!",
          error: err,
        });
      } else if (!userInfo) {
        return res.send("We could not find your email");
      } else {
        // console.log('email find successfuly')
        // res.send(('email find successfuly'))
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
          // return console.log(userInfo);
          const login_token = jwt.sign(
            { id: userInfo._id },
            req.app.get("secretkey"),
            { expiresIn: "1h" }
          );
          return res.status(200).json({
            message: "Successfuly Login to your Account",
            token: login_token,
            user: {
              _id: userInfo._id,
              name: userInfo.name,
              email: userInfo.email,
              cnic: userInfo.cnic,
              adress: userInfo.adress,
              phone: userInfo.phone,
              user_type: userInfo.user_type,
            },
          });
        } else {
          return res.status(403).json({
            message: "Wrong Password!",
          });
        }
      }
    });
  },
  getUsers: async (req, res) => {
    var userId = req.params.user_id;


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let userType = await checkUserType(userId);

    // return res.send(userType);
    //  return res.send("check user type");

    if (!userType) {
      return res.status(401).json({
        message: "Unauthorized to perform this action!!!",
      });
    }

    await userModel
      .find({}, { password: 0 })
      .then((data) => {
        return res.status(200).json({
          message: "Successfuly retrive data",
          users: data,
        });
      })
      .catch((err) => {
        return res.status(200).json({
          message: "User Account Not Registerred",
          error: err,
        });
      });

    //
  },
  updateUserRole: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const reqId = req.params.id;
    let userType = req.body.user_type;

    let isUserAdmin = await checkUserType(req.body.user);
    // return res.send(isUserAdmin);
    //  return res.send("check user type");

    if (!isUserAdmin) {
      return res.status(401).json({
        message: "Unauthorized to perform this action!!!",
      });
    }

    let sssds = await checkUserExist(reqId);

    if (sssds) {
      return res.status(404).json({
        message: "We could not find any user",
      });
    }
    // return res.send(sssds);

    let updateRole = {
      user_type: userType,
    };

    await userModel
      .findByIdAndUpdate(reqId, updateRole, { new: true })
      .then((data) => {
        return res.status(201).json({
          message: `User Role has been changed to ${userType}`,
          user: data,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      });
  },
};

module.exports = userController;
