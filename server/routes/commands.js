var express = require('express');
var jwt = require('jsonwebtoken');
var secret = require('../common/config').secret;
var jwtauth = require('../common/jwtauth');
var Watson = require('../../watsonzmq');
var watson = new Watson.Watsonzmq(8989);
var fs = require('fs');



var routes = function (app) {

    process.on('SIGINT', function() {
        console.log('SIGINT');
        process.exit();
    });


    app.post('/api/Start', jwtauth, function (req, res, next) {


        var startData = req.body;
        var scriptFileName  = 'C:/watsonScripts/22.71/script_estimator_one_port.txt';
        startData.ScriptContent = fs.readFileSync(scriptFileName, 'utf8');

        watson.Start(startData, function(err)
        {
            res.send(err);
        });
    });

    app.get('/api/Stop', jwtauth, function (req, res, next) {

        watson.Stop(function(err)
        {
            res.send(err);
        });
    });

    app.get('/api/GetSampleNumber', jwtauth, function (req, res, next) {

        res.send("GetSampleNumber ok");
    });

    app.get('/api/IsConnected', jwtauth, function (req, res, next) {

        watson.IsConnected(function(err)
        {
            console.log("connected: " + err);
            // send socket io here!
        });
        res.send("ok");
    });


    app.get('/api/GetTotalSampleNumber', jwtauth, function (req, res, next) {

        res.send("GetTotalSampleNumber ok");
    });

    app.get('/api/IsWatsonAlive', jwtauth, function (req, res, next) {

        res.send("IsWatsonAlive ok");
    });

    app.get('/api/IsRunning', jwtauth, function (req, res, next) {

        res.send("IsRunning ok");
    });

    app.post('/api/SetEstimatorOnly', jwtauth, function (req, res, next) {

        res.send("ok");
    });


    return {
        routes: routes
    }
}

module.exports = routes;
