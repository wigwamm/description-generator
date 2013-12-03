angular.module('app').directive('changeQuestion', function() {
	return {
		link: function(scope, element, attrs){

			element.bind('click', function(){
				var currentQuestionNumber = scope.currentQuestionNumber;
				var nextQuestionNumber;
				var noFurtherSubQuestion = scope.subQuestion || !scope.question.hasSub || scope.$index > scope.question.subQuestions.length - 1;
				var nextQuestion;

				if ( noFurtherSubQuestion ) {
					nextQuestionNumber = scope.$parent.$index + 1;
					nextQuestion       = scope.model.questions[nextQuestionNumber];
				} else {
					nextQuestionNumber = scope.$index;
					nextQuestion       = scope.question.subQuestions[nextQuestionNumber];
				}
				scope.changeQuestion(nextQuestion, nextQuestionNumber);
				scope.$apply();
			});
		}
	};
});

