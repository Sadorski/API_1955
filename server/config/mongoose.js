const mongoose = require('mongoose')
module.exports = function(){
    mongoose.connect('mongodb://localhost/1955api');
}
