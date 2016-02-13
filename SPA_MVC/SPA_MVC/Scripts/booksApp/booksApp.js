/// <reference path="../angular.js" />
var module = angular.module("BooksApp", ["ngRoute", "booksControllers"]);

module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/books', {
            templateUrl: 'templates/books.html',
            controller: 'ListController'
        }).otherwise({
            redirectTo: '/books'
        });
}]);