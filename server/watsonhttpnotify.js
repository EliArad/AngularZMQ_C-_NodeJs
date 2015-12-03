var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var bodyParser = require('body-parser');
var port = 1501;
server.listen(port);
console.log("Running on port " + port);
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var allClients = [];



var notifyServer = function (io) {


    io.on('connection', function(client) {
        console.log('a user connected');
        allClients.push(client);

        client.on('disconnect', function() {
            console.log('Got disconnect!');

            var i = allClients.indexOf(client);
            allClients.splice(i, 1);
        });
    });


    app.get('*', function (req, res) {
        console.log("CreateRestaurant");
        res.send("ok");
    });

    app.post('/api/watsonNotifyMsg', function (req, res) {
        console.log("post watsonNotifyMsg");
        console.log(req.body);


        for (var i = 0 ; i < allClients.length; i++)
        {
            try
            {
                allClients[i].emit('watsonnotify', req.body);
            }
            catch (err)
            {

            }
        }

        res.send("ok");
    });


};

module.exports = notifyServer;