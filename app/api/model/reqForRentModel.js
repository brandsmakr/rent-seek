const mongoose = require("mongoose");
const { Schema } = mongoose;

const rentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "users", required: true },
  product: { type: Schema.Types.ObjectId, ref: "products", required: true },
  rent_duration: { type: Number, required: true },
  is_order_approved: { type: Boolean, default: false },
});

// create index on mongoose
rentSchema.index({ user: 1, product: 1 });

// create a module and exports for external usage
const rentalModel = mongoose.model("rent", rentSchema);
module.exports = rentalModel;
