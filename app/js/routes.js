angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/questions', {
    templateUrl: 'js/questions/questions.html',
    controller: 'QuestionsController'
  });

  $routeProvider.when('/descriptions', {
    templateUrl: 'js/descriptions/descriptions.html',
    controller: 'DescriptionsController'
  });

  $routeProvider.otherwise({ redirectTo: '/questions' });

});
