var zmq = require('zmq');var socket = zmq.socket('req');var Guid = require('guid');var dict = require("dict");var keys = {};var Watsonzmq = function (port) {    try {        this.port = port;        socket.connect('tcp://localhost:' + this.port);        console.log('ready');    }    catch (err)    {    }};Watsonzmq.prototype = function () {        process.on('SIGINT', function() {            console.log('closed');            socket.close();        });        socket.on('message', function (msg)        {            msg = msg.toString();            var j = JSON.parse(msg);            var callback = keys[j.msgid];            if (callback) {                callback(j.error);                delete keys[j.msgid];            }        });        var Start = function(data, callback)        {            guid = Guid.create();            var cmd = {                name: 'Start',                data: JSON.stringify(data),                msgid: guid.value.toString()            }            keys[cmd.msgid] = callback;            socket.send(JSON.stringify(cmd));        },        Stop = function(callback)        {            guid = Guid.create();            var cmd = {                name: 'Stop',                data: '',                msgid: guid.value.toString()            }            keys[cmd.msgid] = callback;            socket.send(JSON.stringify(cmd));        },        IsConnected = function(callback)        {            guid = Guid.create();            var cmd = {                name: 'IsConnected',                data: '',                msgid: guid.value.toString()            }            keys[cmd.msgid] = callback;            socket.send(JSON.stringify(cmd));        },        SetEstimatorOnly = function(callback)        {            guid = Guid.create();            var cmd = {                name: 'SetEstimatorOnly',                data: '',                msgid: guid.value.toString()            }            keys[cmd.msgid] = callback;            socket.send(JSON.stringify(cmd));        }        GetSampleNumber = function(callback)        {            guid = Guid.create();            var cmd = {                name: 'Stop',                data: '',                msgid: guid.value.toString()            }            keys[cmd.msgid] = callback;            socket.send(JSON.stringify(cmd));        }        GetTotalSampleNumber = function(callback)        {        },        IsRunning = function(callback)        {        },        GetVersion = function(callback)        {        },        PowerDown = function(callback)        {        },        GetStorageDiskSize = function(callback)        {        },        GetStorageAvailableFreeDiskSize = function(callback)        {        },        SetBroadcastWatsonTemperatureToBase = function(callback)        {        },        IsWatsonAlive = function(callback)        {           var cmd = {                name: 'IsWatsonAlive',                data: '',                msgid: 9113           }           keys[cmd.msgid] = callback;           socket.send(JSON.stringify(cmd));        }    return {        IsWatsonAlive:IsWatsonAlive,        Start:Start,        Stop:Stop,        GetSampleNumber:GetSampleNumber,        GetTotalSampleNumber:GetTotalSampleNumber,        IsRunning:IsRunning,        GetVersion:GetVersion,        PowerDown:PowerDown,        GetStorageDiskSize:GetStorageDiskSize,        GetStorageAvailableFreeDiskSize:GetStorageAvailableFreeDiskSize,        SetBroadcastWatsonTemperatureToBase:SetBroadcastWatsonTemperatureToBase,        SetEstimatorOnly:SetEstimatorOnly,        IsConnected:IsConnected    };} ();module.exports.Watsonzmq = Watsonzmq;