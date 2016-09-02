(function() {

    'use strict'

    angular.module('myApp').controller('myCtrl', ['$scope', 'BookService', function($scope, BookService) {
        $scope.books = BookService.getBookListArray();
        $scope.book = {};
        $scope.bookToOrder = BookService.getBookToOrder();
        $scope.err = BookService.getMessage();

        $scope.addBook = function(book) {

            if (!$scope.contains(book, $scope.books)) {
                var temp = {
                    auther: book.auther,
                    title: book.title,
                    numPages: book.numPages,
                    description: book.description,
                    inStock: book.inStock,
                    price: book.price
                };
                $scope.err = "Book Added";
                BookService.setMessage("Book Added");
                $scope.books.push(temp);
                // emptying the object after adding the book
                $scope.book = {};

            } else {
                $scope.err = "Book already contains";
            }
        }

        $scope.removeBook = function(book) {
            var allBooks = $scope.books;
            for (var i = 0; i < allBooks.length; i++) {
                if ((allBooks[i].auther === book.auther) && (allBooks[i].title === book.title)) {
                    $scope.books.splice(i, 1);
                }
            }
            $scope.err = "Book removed";
        }

        $scope.orderBook = function(book) {
            BookService.setBookToOrder(book);
            //$scope.bookToOrder = BookService.getBookToOrder();
            $scope.bookToOrder = book;
            // Get the modal
            var modal = document.getElementById('myModal');

            // Get the button that opens the modal
            var btn = document.getElementById("myBtn");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            modal.style.display = "block";
        }

        $scope.closeWindow = function() {
            // Get the modal
            var modal = document.getElementById('myModal');
            modal.style.display = "none";
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

        $scope.placeOrder = function(quantity) {
            var book = BookService.getBookToOrder();
            book.inStock = parseInt(Number(book.inStock) - Number(quantity.orderQuantity));
        }

        $scope.orderBookWithQuantiy = function(quantity) {
            // Get the modal
            var modal = document.getElementById('myModal');
            $scope.placeOrder(quantity);
            modal.style.display = "none";
        }

    }])

})();