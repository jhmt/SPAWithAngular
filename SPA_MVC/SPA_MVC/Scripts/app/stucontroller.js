/// <reference path="../angular.js" />
var stucontrollers = angular.module("stucontrollers", ["ServiceModule"]);
stucontrollers.controller("GetStudentsList",
    function GetStudentsList($scope, myservice) {
    //$http.get("/api/students").success(function (data) {
        //    $scope.students = data;
        loadRecords();
        function loadRecords() {
            var promiseGet = myservice.getStudents(); //The MEthod Call from service
            promiseGet.then(function (pl) { $scope.students = pl.data },
                  function (errorPl) {
                      $log.error('failure loading Employee', errorPl);
                  });
        }
});
stucontrollers.controller("AddStudent", function ($scope, $http, $location) {
    $scope.student = {
        "FirstName": "",
        "LastName": "",
        "Age": "",
        "Gender": "Male"
    };
    $scope.genders = ['Male', 'Female', 'Other'];
    $scope.pattern = /^\s*\d+\s*$/;
    $scope.Add = function () {
        $http({ method: "POST", data: $scope.student, url: "/api/students" })
        .success(function (data, status, headers, config) {
            $scope.students = data;
            $scope.student = {
                "FirstName": "",
                "LastName": "",
                "Age": "",
                "Gender": ""
            };
        });
        alert("Studnet added successfully");
        $location.path('/allstu');
    }
});


stucontrollers.controller("AllStudents", function ($scope, $http) {

    $scope.getAll = function () {
        $http({ method: "GET", url: "/api/students" }).
success(function (data, status, headers, config) {
    $scope.students = data;
});
    }
    $scope.getAll();
    $scope.Remove = function (Id) {

        $http({ method: "DELETE", url: "/api/students/" + Id })
            .success(function () {
                alert("Deleted Successfully..!!");
                $scope.getAll();
            });

    }

});