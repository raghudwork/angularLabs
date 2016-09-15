(function(){

	'use strict'
	
	angular.module('myApp').service('BookService', function(){

		this.bookList = [];
		this.bookToOrder = {};
		this.message = "";
		this.bookToRemove = {};

		var test = tempBooks;

		for (var i=0; i < test.length; i++) {
		  this.bookList.push(test[i]);
		}

		this.addBookToBookList = function(book){
			//duplicates will not be passed. Just add it
			bookList.push(book);
		}

		this.getBookListArray = function(){
			return this.bookList;
		}

		this.setBookToOrder = function(book){
			this.bookToOrder = book;
		}

		this.getBookToRemove = function(){
			return this.bookToRemove;
		}

		this.setBookToRemove = function(book){
			this.bookToRemove = book;
		}

		this.getBookToOrder = function(){
			return this.bookToOrder;
		}

		this.getMessage = function(){
			return this.message;
		}

		this.setMessage = function(message){
			this.message = message
		}


	})
})();
