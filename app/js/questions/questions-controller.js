angular.module('app').controller('QuestionsController', function($scope, $location, QuestionsModel) {

	$scope.title = 'Proppycock';
	$scope.intro = 'Property descriptions are a load of poppycock. Poke fun and create a proppycock description for your property and share with the world.';
	$scope.questions = QuestionsModel.all;

});
