(function(){

	'use strict'
	angular.module('myApp').controller('addBookCtrl', ['$scope', 'BookService', '$stateParams', '$state', function($scope, BookService, $stateParams, $state) {

		$scope.books = BookService.getBookListArray();
        $scope.book = {};
        $scope.bookToOrder = BookService.getBookToOrder();
        $scope.err = BookService.getMessage();
        $scope.auther = $stateParams.auther;

        if($scope.auther !==''){
            var allBooks = $scope.books;
            var auther = $scope.auther
            for (var i = 0; i < allBooks.length; i++) {
                if (allBooks[i].auther ===auther) {
                    $scope.book  = allBooks[i];
                }
            }
        }



        $scope.addBook = function(book) {

            if (!$scope.contains(book, $scope.books)) {
                var temp = {
                    auther: book.auther,
                    title: book.title,
                    numPages: book.numPages,
                    description: book.description,
                    inStock: book.inStock,
                    price: book.price,
                    addedAt: new Date(),
                    orderedAt: ""
                };                
                BookService.setMessage("Book Added");
                $scope.err = BookService.getMessage();
                $scope.books.push(temp);
                // emptying the object after adding the book
                $scope.book = {};
                $state.go('bookList');



            } else {
                BookService.setMessage("Book already contains");
                $scope.err = BookService.getMessage();
            }


        }  

        $scope.contains = function(book, books) {

            var containsBook = false;
            //extract sub arrays from books for each property
            var autherArry = books.map(function(books) {
                return books.auther;
            });

            containsBook = autherArry.indexOf(book.auther) > -1

            if (containsBook) {
                var titleArry = books.map(function(books) {
                    return books.title;
                });

                containsBook = titleArry.indexOf(book.title) > -1

            }

            return containsBook;

        }
    }])

})();
