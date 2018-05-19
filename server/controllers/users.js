const mongoose = require('mongoose')
var User = require('../models/user')

module.exports.index = function(req, res){
    User.find({}, function(err, users){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
            res.json({message: "Error", error: err})
        }
        else {
            // respond with JSON
            res.json({data: users})
        }
    })
}
module.exports.new = function(req, res){
    var user = new User({name: req.params.name})
    user.save(function(err){
        if(err){
            console.log('something went wrong')
        } else {
            res.redirect('/')
        }
    })
}
module.exports.show = function(req, res){
    User.findOne({name: req.params.name}, function(err, user){
        if (err) {
            console.log('hello')
            res.redirect('/')
        }
        res.json({data:user})
    })
}
module.exports.delete = function(req, res){
    User.remove({name: req.params.name}, function(err, user) {
        if (err) { 
            console.log(err);
            res.redirect('/')
        }
        res.redirect('/')
    })
}