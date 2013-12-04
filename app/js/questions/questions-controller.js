angular.module('app').controller('QuestionsController', function($scope, $location, QuestionsModel, BlabberService, DescriptionService) {

	$scope.model = {};
	$scope.model.questions = QuestionsModel.all;

	$scope.answers = {};
	$scope.description = DescriptionService;

	$scope.makeActive = function(item) {
		$scope.active = item;
	};
	$scope.activeClass = function(item) {
		return item === $scope.active ? 'is-active' : undefined;
	};

	$scope.currentQuestionNumber = 0;
	$scope.changeQuestion = function(question, questionNumber) {
		$scope.makeActive(question);
		$scope.currentQuestionNumber = questionNumber;
	};

	$scope.begin = function(){
		$scope.changeQuestion($scope.model.questions[0], 0);
	};

	var onGenerateSuccess = function(response) {
		$scope.description.descriptionBody = response[0].description;
		$location.path('/description');
	};

	$scope.postAnswers = function() {
		BlabberService.generateDescription($scope.answers).success(function(data, status, headers, config){
			onGenerateSuccess(data);
		});
		console.log('Posting answers');
	};

});
