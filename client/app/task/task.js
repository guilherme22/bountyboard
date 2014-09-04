'use strict';

angular.module('jobApplicationApp')
  .config(function ($stateProvider) {
    $stateProvider
        .state('all', {
            url: '/task/all',
            templateUrl: 'app/task/all/all.html',
            controller: 'AllCtrl',
            authenticate: true
        })
        .state('create', {
            url: '/task/create',
            templateUrl: 'app/task/create/create.html',
            controller: 'CreateCtrl',
            authenticate: true
        })
        .state('update', {
            url: '/task/update',
            templateUrl: 'app/task/update/update.html',
            controller: 'UpdateCtrl',
            authenticate: true
        });
  });