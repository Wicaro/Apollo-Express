const express = require('express');
const Router = express.Router();


Router.get('/', function(request, response){
    response.render('template')
})


module.exports = Router 