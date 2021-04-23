function ContactController($scope) {
	$scope.name = 'Steve Jobs';
	$scope.title = 'Cleaner';
	$scope.email = 'tim@apple.com';
}

angular
	.module('app')
	.controller('ContactController', ContactController);