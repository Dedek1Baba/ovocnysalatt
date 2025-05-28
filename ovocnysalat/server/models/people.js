const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { type: String, required: true },
    fruit: { type: String, required: true },
    dressing: { type: String, required: true },
    topping: { type: String, required: true }
});

module.exports = mongoose.model("salads", schema);
