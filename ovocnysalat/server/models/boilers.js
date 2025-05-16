const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {type:String, required:true},
    power: {type:Number, required:true},
    heating: {type:Number, required:true},
    price: {type:Number, required:true}
});

module.exports = mongoose.model("boilers", schema);