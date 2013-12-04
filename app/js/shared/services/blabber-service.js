angular.module('app').factory('BlabberService', function($q, $http) {
  // these routes map to stubbed API endpoints in config/server.js
  return {
    generateDescription: function(answers) {
      return $http.post('/blabber/generate', answers);
    }
  };
});

