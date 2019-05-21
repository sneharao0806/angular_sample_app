let myapp=angular.module("Myapp",[]);

let mycontroller = function($scope){
    $scope.message="Hello World!";
}

myapp.controller("MyController",mycontroller);

let JSONController = function($scope){
    let Student6= {
        FirstName: "Sneha",
        LastName: "Madhavaram",
        Email: "S533984@nwmissouri.edu"
    }

    $scope.Student=Student;
}

myapp.controller("Student",JSONController);