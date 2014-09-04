'use strict';

angular.module('jobApplicationApp')
  .controller('AllCtrl',["$scope", "$location", "Task" ,function ($scope, $location, Task) {
    $scope.message = 'Hello';
/*
     Task.create({
         title: "new Task",
         category: "An Category",
         active: true,
         reward: "10.00",
         user: "Guilherme",
         replies:[],
         tags:[]
     }, function(retorno){
         console.log(retorno);
     });
*/
    Task.all(function(retorno){
        console.log(retorno);
    })

  }]);
