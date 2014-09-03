'use strict';

angular.module('jobApplicationApp')
  .factory('Task',["$location", "$rootScope", "$http", "User", "$cookieStore", "$q", function Task ($location, $rootScope, $http, User, $cookieStore, $q) {
      var currentUser = {};
      if($cookieStore.get('token')) {
            currentUser = User.get();
        }
    return {
        /**
         * Create a new task
         *
         * @param  {Object}   task     - task info
         * @param  {Function} callback - optional
         * @return {Promise}
         */
      create: function (task, callback) {
      var cb = callback || angular.noop;

        $http.post('/api/tasks', task).success(cb).error(function(){
            alert("Error");
        })

      },
      update: function(){

      },
      all: function(callback){
       var cb = callback || angular.noop;
       $http.get('/api/tasks').success(cb).error(function(){
           console.log("Error at Task.All()");
       })
      }


    };
  }]);
