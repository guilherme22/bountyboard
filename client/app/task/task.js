'use strict';

angular.module('jobApplicationApp')
  .config(function ($stateProvider) {
    $stateProvider
        .state('all', {
            url: '/task/all',
            templateUrl: 'app/task/all/all.html',
            controller: 'AllCtrl'
        })
        .state('create', {
            url: '/task/create',
            templateUrl: 'app/task/create/create.html',
            controller: 'CreateCtrl'
        })
        .state('update', {
            url: '/task/update',
            templateUrl: 'app/task/update/update.html',
            controller: 'UpdateCtrl'
        });
  });