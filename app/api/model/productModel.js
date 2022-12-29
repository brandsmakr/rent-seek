// require mongoose
const mongoose = require('mongoose');
// import schema object from monogoose
const { Schema } = mongoose;

// product schema
const prodSchema = new Schema({
    category: {type: Schema.Types.ObjectId, ref: 'categories'},
    title:{type: String, required: true },
    description:{type: String},
    regular_price:{type: Number, required: true},
    rented_price:{type: Number},
    qty:{type: Number, required: true, default:1},
    imgUrls:{type:String, required: true}
});
// create index on mongoose
prodSchema.index({ category: 1 });

// create a module and exports for external usage
const product = mongoose.model('product', prodSchema);
module.exports = product;