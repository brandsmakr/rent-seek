// require express
const express = require("express");
const app = express();
// method override
var methodOverride = require('method-override');
app.use(methodOverride());
// cookie parser
var cookieParser = require('cookie-parser')
app.use(cookieParser())
// require http
const http = require("http");
// server info
const hostname = "127.0.0.1";
const port = 8888;
// require json web token
const jwt = require("jsonwebtoken");
// require cors
const cors = require("cors");
app.use(cors());
// mongoose connection
require("./database/db");
// require bodyParser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// // require multer
// const multer = require('multer');
// const forms = multer();
// app.use(forms.array()); 
// get images from static folder
app.use("/uploads", express.static("./uploads"));

// require cat Route
const catRoute = require("./routes/categoryRoute");
app.use("/cat", catRoute);

// require product Route
const prodRoute = require("./routes/productRoute");
app.use("/prod", prodRoute);

// require contact Route
const contact = require("./routes/contactRoute");
app.use("/contact", contact);

// require user Route
const user = require("./routes/userRoute");
app.use("/user", user);

// require order Route
const order = require("./routes/orderRoute");
app.use("/order", order);

// require rental_request Route
const rental_req = require("./routes/requestForRentalRoute");
app.use("/rent", rental_req);

// seckret key
app.set("secretkey", "rentSeekMernStackWebApp123#2@786(?#&2");

// autentication in nodejs
function validateUser(req, res, next) {
  // console.log(req.headers.authorization);
  // next();
  jwt.verify(
    req.headers.authorization,
    req.app.get("secretkey"),
    function (err, decode) {
      if (err) {
        res.send({ status: "Authorization", message: err.message });
      } else {
        next();
      }
    }
  );
}

app.listen(port, hostname, () => {
  console.log(
    `Your server is running on http://localhost:${port} or http://${hostname}:${port}`
  );
});

// server.listen(port, hostname, ()=>{
//     console.log(`Server running at http://${hostname}:${port}/`);
// })
