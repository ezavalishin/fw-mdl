var fw = angular.module('fw', ['ngRoute']);


fw.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	$routeProvider
		.when('/screen',{
			templateUrl:'screen.tmpl.html',
          	controller:'screenCtrl'
		})
		.when('/welcome',{
			templateUrl:'welcome.tmpl.html',
          	controller:'welcomeCtrl'
		})
		.when('/help',{
			templateUrl:'help.tmpl.html',
          	controller:'helpCtrl'
		})
		.when('/feedback',{
			templateUrl:'feedback.tmpl.html',
          	controller:'feedbackCtrl'
		})
		.when('/reg',{
			templateUrl:'reg.tmpl.html',
          	controller:'regCtrl'
		})
		.when('/login',{
			templateUrl:'login.tmpl.html',
          	controller:'loginCtrl'
		})
		.otherwise({
          redirectTo: '/screen'
        });
}]);

fw.controller('fwMain', ['$scope','$location','$route','$filter', function($scope,$location,$route,$filter){
	$('.button-collapse').sideNav({
     	menuWidth: 250, // Default is 240
      	edge: 'left', // Choose the horizontal origin
      	closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	});
}]);

fw.controller('screenCtrl', ['$scope','$http', function($scope,$http){
	var grid = new Screen;
	grid.init();
	randColor();
	$('.screen').sortable({
        helper: "clone"
	});
}]);

fw.controller('feedbackCtrl', ['$scope','$http', function($scope,$http){
	$('select').material_select();
}]);

fw.controller('regCtrl', ['$scope','$http', function($scope,$http){
	$scope.showTab1 = true;
	$scope.showTab2 = false;
}]);