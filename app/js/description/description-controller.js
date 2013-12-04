angular.module('app').controller('DescriptionController', function($scope, DescriptionService){
	$scope.description = DescriptionService.descriptionBody;

});
