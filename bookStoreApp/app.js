//define angular module
(function(){
	'use strict'
     var app = angular.module('myApp', ['ui.router']);   

     app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

     	$urlRouterProvider.otherwise("bookList")

     	$stateProvider
                        .state('bookList', {
                            url: "/bookList",
                            templateUrl: "bookList.html",
                            controller : 'addBookCtrl'
                        })

                        .state('addBook', {
                            url: "/addBook",
                            templateUrl: "addBook.html"
                        })

     }]);


}
)();
