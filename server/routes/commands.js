var express = require('express');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var jwtauth = require('../common/jwtauth');

var routes = function (app) {


  var commandsRouter = express.Router();

  app.post('/api/sendMessageToMember' , jwtauth, function (req, res, next) {
     res.send("ok");
  });

  app.post('/api/deletepospondcard', jwtauth, function (req, res, next) {

    res.send("ok");
  });


  return {
    routes: routes
  }
}

module.exports = routes;
