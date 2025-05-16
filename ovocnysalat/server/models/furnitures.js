const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {type:String, required:true},
    seller: {type:String, required:true},
    color: {type:String, required:true},
    width: {type:Number, required:true},
    height: {type:Number, required:true},
    depth: {type:Number, required:true},
    price: {type:Number, required:true}
});

module.exports = mongoose.model("furnitures", schema);