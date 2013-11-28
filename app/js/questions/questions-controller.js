angular.module('app').controller('QuestionsController', function($scope, $location, QuestionsModel) {

	$scope.model = {};
	$scope.model.questions = QuestionsModel.all;

});
