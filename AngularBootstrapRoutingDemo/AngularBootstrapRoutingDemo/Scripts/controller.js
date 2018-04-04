//Module:
var demoApp = angular.module('routingDemo', ['ngRoute']);
//Configure routes:
demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html', //route for home page
            //controller: 'mainController'//controller to set content of the home page
        })
        .when('/description', {
            templateUrl: 'templates/description.html', //route for description page
            controller: 'descriptionController' //controller to set content of the description page
        })
        .when('/support', {
            templateUrl: 'templates/support.html', //route for support page
            controller: 'supportController' //controller to set content of the support page
        });
});
//controllers:
/*demoApp.controller('mainController', function ($scope) {
    $scope.message = 'Mjaaland Industries Inc.';
});*/
demoApp.controller('descriptionController', function ($scope) {
    $scope.message = 'M.I. Inc. was founded by Henrik Mjaaland in 2018.';
});
demoApp.controller('supportController', function ($scope) {
    $scope.message = "Hey, this is crazy, but here's my number. So call me maybe!";
});