/// <reference path="../angular.js" />
var stucontrollers = angular.module("stucontrollers", []);
stucontrollers.controller("GetStudentsList",
    function ($scope, $http) {
    $http.get("/api/students").success(function (data) {
        $scope.students = data;
    })
});