/// <reference path="../angular.js" />
var booksControllers = angular.module("booksControllers", []);

booksControllers.controller("ListController", function ($scope, $http) {
    $http.get("http://localhost:4123/api/books").success(function (data) {
        $scope.books = data;
    });
});