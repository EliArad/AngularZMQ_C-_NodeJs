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


    'ngSanitize',
    'ngTouch'


  ]).constant("myConfig", {
      "url": "http://localhost:1500"

    })

