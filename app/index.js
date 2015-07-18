
// Vendors
window.$ = window.jQuery = require('jquery');
require('angular');
require('angular-route');
require('angular-resource');


//Angular Module Definitions and Config including routes
angular.module('Music', ['ngRoute', 'ngResource']).config(function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: '/artists'
    })

    .when('/artists', {
      template: require('./templates/artists/index.html'),
      controller: "ArtistsIndexController"
    })

    .when('/artist/:mbid', {
      template: require("./templates/artists/show.html"),
      controller: "ArtistShowController"
    })

    .when('/other', {
    	template: require('./templates/other/index.html')
    });

});

// Services
var services = require.context('./services', true, /.js$/);
services.keys().forEach(services);
 
// Directives
var directives = require.context('./directives', true, /.js$/);
directives.keys().forEach(directives);
 
// Filters
var filters = require.context('./filters', true, /.js$/);
filters.keys().forEach(filters);
 
// Controllers
var controllers = require.context('./controllers', true, /.js$/);
controllers.keys().forEach(controllers);
