// require mongoose
const mongoose = require("mongoose");
// import schema object from mongoose
const schema = mongoose.Schema;

// create Category Schema
const catSchema = new schema({
  // category name
  name: {
    type: String,
    require: true,
    unique: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
});

// create index on mongoose
catSchema.index({ name: 1 });

// create a model
let category = mongoose.model("categories", catSchema);

// export model
module.exports = category;
