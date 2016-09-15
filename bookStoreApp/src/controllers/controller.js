(function() {

    'use strict'

    angular.module('myApp').controller('myCtrl', ['$scope', 'BookService', '$state', function($scope, BookService, $state) {

        $scope.books = BookService.getBookListArray();
        $scope.book = {};
        $scope.bookToOrder = BookService.getBookToOrder();
        $scope.bookToRemove = BookService.getBookToRemove();
        $scope.bookListMsg = BookService.getMessage();
        //for sorting order
        $scope.reverse = true;

        //setting the book to show details in differet view
        $scope.setBook = function(book){
            $scope.book = book;
            $state.go('bookDetails', {auther: book.auther});
        }

        $scope.sortBy = function(column){
            $scope.reverse = ($scope.columnName === column) ? !$scope.reverse : false;
            $scope.columnName = column;
        }

        //ORDERING BOOK RELATED

        $scope.orderBook = function(book) {
            BookService.setBookToOrder(book);
            $scope.bookToOrder = book;
            // Get the modal
            var modal = document.getElementById('myModal');
            modal.style.display = "block";
        }

        $scope.closeWindow = function() {
            // Get the modal
            var modal = document.getElementById('myModal');
            modal.style.display = "none";
        }        


        $scope.placeOrder = function(quantity) {
            var book = BookService.getBookToOrder();
            book.inStock = book.inStock - quantity.orderQuantity;
            book.orderedAt = new Date();
        }

        $scope.orderBookWithQuantiy = function(quantity) {
            // Get the modal
            var modal = document.getElementById('myModal');
            $scope.placeOrder(quantity);
            modal.style.display = "none";
            BookService.setMessage("Book order placed");
        }
        

        //REMOVING BOOK REALTED
        $scope.removeBook = function() {
            var allBooks = $scope.books;
            var book = BookService.getBookToRemove();
            for (var i = 0; i < allBooks.length; i++) {
                if ((allBooks[i].auther === book.auther) && (allBooks[i].title === book.title)) {
                    $scope.books.splice(i, 1);
                }
            }
            $scope.bookListMsg = "Book removed";
        }

        $scope.removeBookConfirm = function(book){
            // Get the modal
            var modal = document.getElementById('confirmBookDeleteModel');
            $scope.removeBook();
            modal.style.display = "none";

        }

        $scope.showRemoveBookConfirm = function(book) {
            BookService.setBookToRemove(book);
            // Get the modal
            var modal = document.getElementById('confirmBookDeleteModel');

            modal.style.display = "block";
        }

        $scope.closeRemoveBookConfirm = function() {
            // Get the modal
            var modal = document.getElementById('confirmBookDeleteModel');
            modal.style.display = "none";
        }

    }])

})();