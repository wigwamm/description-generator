angular.module('app').directive('changeQuestion', function() {
	return {
		link: function(scope, element, attrs){

			element.bind('click', function(){
				var nextQuestion, nextQuestionNumber;
				var lastQuestion = scope.$parent.$index === (scope.model.questions.length - 1);
				var noFurtherSubQuestion = scope.subQuestion || !scope.question.hasSub || scope.$index > scope.question.subQuestions.length - 1;

				if ( lastQuestion ) {
					scope.postAnswers();
					return;
				}

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

