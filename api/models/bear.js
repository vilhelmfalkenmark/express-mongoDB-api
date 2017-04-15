var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
    name: String,
    type: String,
    age: Number,
    image_url: String,
    description: String
});

module.exports = mongoose.model('Bear', BearSchema);
