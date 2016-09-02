(function(){

	'use strict'
	
	angular.module('myApp').service('BookService', function(){

		this.bookList = [];
		this.bookToOrder = {};
		this.message = "Welcome to Angular Book Store";
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
