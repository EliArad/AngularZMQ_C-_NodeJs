'use strict';


var cities = [];

var app = angular
  .module('app', [
    'ngAria',
    'ngPasswordStrength',
    'ngCookies',
    'ngMessages',
    'ngResource',

    'ui.bootstrap',
    'ui.checkbox',


    'ui.router',
    'base64',


    'ngSanitize',
    'ngTouch'


  ]).constant("myConfig", {
      "url": "http://localhost:1500"

    })

