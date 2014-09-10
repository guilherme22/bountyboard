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

        $http.post('/api/tasks', task).success(cb).error(function error (){
            console.log("Unnautorized")
        })

        },

      update: function(task, callback){
          var cb = callback || angular.noop;
          $http.put('/api/tasks/'+task._id, task).success(cb).error(function(data){
              console.log(data)
          })
      },

      all: function(callback){
       var cb = callback || angular.noop;
       $http.get('/api/tasks').success(cb).error(function(data){
           console.log(data);
       })
      },

      findById: function(id, callback){
          var cb = callback || angular.noop;
          if(id){
              $http.get('/api/tasks/'+id).success(cb).error(function(data){
                  console.log(data);
              })
          }else{
              return null;
          }


      }


    };
  }]);
