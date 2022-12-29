const mongoose = require('mongoose');

const schema = mongoose.Schema;

const contactSchema = new schema({
    name:{type:String, require:true },
    email:{type:String, require:true },
    phone:{type:Number, require:true},
    message:{type:String, require:true}
});

// create index on mongoose
contactSchema.index({ email: 1 });

const contact = mongoose.model('contact', contactSchema);

module.exports = contact