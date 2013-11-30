angular.module('app').controller('QuestionsController', function($scope, $location, QuestionsModel) {

	$scope.model = {};
	$scope.model.questions = QuestionsModel.all;

	$scope.makeActive = function(item) {
		$scope.active = item;
	};
	$scope.activeClass = function(item) {
		return item === $scope.active ? 'is-active' : undefined;
	};

});
