const mongoose = require('mongoose')
var User = require('../models/user')
const users = require('../controllers/users')
module.exports = function(app){
    app.get('/', function(req, res) {
        users.index(req, res);
    })

    app.get('/new/:name', function(req, res) {
        users.new(req, res);
    })
    app.get('/remove/:name', function(req, res) {
        users.delete(req, res);
    });
    app.get('/:name', function(req, res) {
        users.show(req, res);
    });    
}
