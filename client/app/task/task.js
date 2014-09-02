'use strict';

angular.module('jobApplicationApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('task', {
        url: '/task',
        templateUrl: 'app/task/task.html',
        controller: 'TaskCtrl'
      });
  });