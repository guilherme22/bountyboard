'use strict';

angular.module('jobApplicationApp')
  .controller('TaskCtrl', function ($scope,$http, Auth) {
     var request =  $http.get('/api/tasks');

        request.success(function(result){
            console.log(result);
        })
    $scope.message = 'Hello';
  });
