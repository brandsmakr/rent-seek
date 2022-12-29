const mongoose = require('mongoose');
const {Schema} = mongoose;

const orderSchema = new Schema({
    order_no:{type: String, required: true, unique:true},
    user:{type: Schema.Types.ObjectId, ref: 'users', required:true},
    product:{type: Schema.Types.ObjectId, ref:'products', required:true},
    rent_start_date:{type:Date, required:true},
    rent_end_date:{type:Date, required:true},
    rent_per_day:{type:Number, required:true},
    total_rent:{type:Number, required:true},
    discount:{types:Number},
    order_created:{type:Date, required:true, default: () => Date.now()}
});
// create index on mongoose
orderSchema.index({ order_no: 1 });

// create a model in mongo db and exports it for external usage
const order = mongoose.model('orders', orderSchema);
module.exports = order