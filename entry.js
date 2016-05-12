console.log('WEBPACK LOADED');
require('./styles/style.less');
require('font-awesome/css/font-awesome.css');
var angular = require('angular');
var app     = angular.module('app', [
  require('angular-route'),
  require('angular-animate')
]);
var masterCtrl = require('./controllers/masterCtrl');
var masterDrtv = require('./directives/masterDrtv');
var headerDrtv = require('./directives/headerDrtv');
var router     = require('./controllers/routerCtrl');
app.config(router);
app
  .controller('masterCtrl', masterCtrl)
  .directive('daHeaderDrtv', headerDrtv)
  .directive('masterDrtv', masterDrtv);
