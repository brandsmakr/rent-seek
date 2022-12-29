const mongoose = require('mongoose');
const db_name = 'rent-seek';

mongoose.connect(`mongodb://localhost:27017/${db_name}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false
}).then(connectionSucess=>{
  console.log('mongoose connected sucessfuly');
}).catch(error=>{
  console.log("mongoose not connected" + error);
})
