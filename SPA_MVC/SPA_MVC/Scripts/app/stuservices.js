var servicemodule = angular.module("ServiceModule", []);

servicemodule.service('myservice', function ($http) {
    //Read all Students  
    this.getStudents = function () {
        return $http.get("/api/Students");
    };
});