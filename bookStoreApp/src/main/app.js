//define angular module
(function(){
	'use strict'
     var app = angular.module('myApp', ['ui.router']);   

     app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

     	$urlRouterProvider.otherwise("bookList")

     	$stateProvider
                        .state('bookList', {
                            url: "/bookList",
                            templateUrl: "html/bookList.html",
                            controller : 'addBookCtrl'
                        })

                        .state('bookDetails',{
                            url: "/bookList/:auther",
                            templateUrl: "html/bookDetails.html",
                            controller : 'addBookCtrl'

                        })

                        .state('addBook', {
                            url: "/addBook",
                            templateUrl: "html/addBook.html"
                        })

     }]);


}
)();
