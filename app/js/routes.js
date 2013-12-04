angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/questions', {
    templateUrl: 'js/questions/questions.html',
    controller: 'QuestionsController'
  });

  $routeProvider.when('/description', {
    templateUrl: 'js/description/description.html',
    controller: 'DescriptionController'
  });

  $routeProvider.otherwise({ redirectTo: '/questions' });

});
