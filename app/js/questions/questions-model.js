angular.module('app').factory('QuestionsModel', function() {
	var questions = {};
	questions.sales = [
		{
			'question' : 'What type of property?',
			'answers'  : [ 'Detached', 'Semi-detached', 'Terraced', 'Flat - Period conversion', 'Flat - block'],
			'slug'     : 'propertyType'
		},
		{
			'question' : 'How many bedrooms?',
			'answers'  : ['Studio', '1', '2', '3', '4', '5', '6', '7'],
			'slug'     : 'numberOfBedrooms'
		},
		{
			'question' : 'What is the postcode of the property?',
			'answers'  : '',
			'slug'     : 'postCode'
		},
		{
			'question' : 'What\'s the asking price?',
			'answers'  : '',
			'slug'     : 'price'
		},
		{
			'question' : 'Which floor is the property on?',
			'answers'  : ['B', 'G', '1..40'],
			'slug'     : ''
		},
		{
			'question' : 'Is there a lift?',
			'answers'  : ['Yes', 'No'],
			'slug'     : 'lift'
		},
		{
			'question' : 'Does the property have a rear garden',
			'answers'  : ['None', 'Small', 'Large', 'Patio', 'Balcony'],
			'slug'     : 'gardenRear'
		},
		{
			'question' : 'Is there parking?',
			'answers'  : ['None', 'On-street', 'Drive', 'Single Garage', 'Double Garage'],
			'slug'     : 'parking'
		},
		{
			'question' : 'When was the property last decorated?',
			'answers'  : ['This year', '%lastYear', '%twoYearsAgo', '%threeYearsAgo or earlier'],
			'slug'     : 'decoratedYear'
		},
		{
			'question' : 'Is the property Freehold or Leasehold?',
			'answers'  : ['Freehold', 'Leasehold'],
			'slug'     : 'tenure'
		},
		{
			'question' : 'How many years left on the lease',
			'answers'  : '',
			'slug'     : 'leaseRemaining'
		},
		{
			'question' : 'Is there a service charge or ground rent?',
			'answers'  : '',
			'slug'     : 'serviceCharge'
		},
		{
			'question' : 'Why are you selling?',
			'answers'  : ['Moving to a new area', 'Down-sizing', 'Up-sizing'],
			'slug'     : 'reasonForSelling'
		}
	];
	questions.lettings = [
		{
			'question' : 'What type of property?',
			'answers'  : [ 'Detached', 'Semi-detached', 'Terraced', 'Flat - Period conversion', 'Flat - block', 'Room to let'],
			'slug'     : 'propertyType'
		},
		{
			'question' : 'How many bedrooms?',
			'answers'  : ['Studio', '1', '2', '3', '4', '5', '6', '7'],
			'slug'     : 'numberOfBedrooms'
		},
		{
			'question' : 'What is the postcode of the property?',
			'answers'  : '',
			'slug'     : 'postCode'
		},
		{
			'question' : 'What\'s the rental price per calendar month?',
			'answers'  : '',
			'slug'     : 'price'
		},
		{
			'question' : 'Which floor is the property on?',
			'answers'  : ['B', 'G', '1..40'],
			'slug'     : ''
		},
		{
			'question' : 'Is there a lift?',
			'answers'  : ['Yes', 'No'],
			'slug'     : 'lift'
		},
		{
			'question' : 'Does the property have a rear garden',
			'answers'  : ['None', 'Small', 'Large', 'Patio', 'Balcony'],
			'slug'     : 'gardenRear'
		},
		{
			'question' : 'Is there parking?',
			'answers'  : ['None', 'On-street', 'Drive', 'Single Garage', 'Double Garage'],
			'slug'     : 'parking'
		},
		{
			'question' : 'When was the property last decorated?',
			'answers'  : ['This year', '%lastYear', '%twoYearsAgo', '%threeYearsAgo or earlier'],
			'slug'     : 'decoratedYear'
		},
		{
			'question' : 'Move in date?',
			'answers'  : '',
			'slug'     : 'moveInDate'
		},
		{
			'question' : 'Is the property furnished?',
			'answers'  : ['Furnished', 'Unfurnished'],
			'slug'     : 'furnished'
		},
		{
			'question' : 'Are pets allowed?',
			'answers'  : ['Pets allowed', 'Caged pets only', 'No pets allowed'],
			'slug'     : 'pets'
		},
		{
			'question' : 'How much deposit is required?',
			'answers'  : ['1 month', '6 weeks', '2 months'],
			'slug'     : 'deposit'
		},
		{
			'question' : 'What are the agent fees?',
			'answers'  : '',
			'slug'     : 'agentFees'
		},
		{
			'question' : 'Who is the property managed by?',
			'answers'  : ['Agent', 'Landlord'],
			'slug'     : 'managedBy'
		},
		{
			'question' : 'What bills are included in the rental price?',
			'answers'  : ['Water', 'Council Tax', 'Energy', 'Phone', 'Broadband', 'TV License'],
			'slug'     : 'billsIncluded'
		}
	];
	return questions;

});
