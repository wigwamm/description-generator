angular.module('app').directive('recordAnswer', function() {
	return {
		link: function(scope, element, attrs){
			element.bind('click', function(){
				var answer = scope.answer;
				var slug;

				if ( scope.question ) {
					slug = scope.question.slug;
				}
				if ( scope.subQuestion ) {
					slug = scope.subQuestion.slug;
				}

				scope.answers[slug] = answer;
				scope.$apply();
				console.log(scope.answers);

				scope.advanceToNextQuestion();
			});
		}
	};
});

