const mongoose = require("mongoose");
// const schema = mongoose.Schema;
// alternative way
const { Schema } = mongoose;
mongoose.pluralize(null);
const bcrypt = require("bcrypt");
var saltround = 10;

const userSchema = new Schema({
  name: { type: String, require: true,  },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  adress: { type: String },
  cnic: { type: Number, require: true, unique: true },
  phone: { type: Number, require: false },
  user_type: { type: String, require: true, default: "client" },
  otp: { type: String, require: true },
  user_verified: { type: Boolean, default: false },
});

userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, saltround);
  next();
});

// create index on mongoose
userSchema.index({ email: 1 });

const user = mongoose.model("users", userSchema);

module.exports = user;
