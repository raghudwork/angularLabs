(function() {

    'use strict'

    angular.module('myApp').controller('myCtrl', ['$scope', 'BookService', '$state', function($scope, BookService, $state) {

        $scope.books = BookService.getBookListArray();
        $scope.book = {};
        $scope.bookToOrder = BookService.getBookToOrder();
        $scope.bookListMsg = BookService.getMessage();

        $scope.removeBook = function(book) {
            var allBooks = $scope.books;
            for (var i = 0; i < allBooks.length; i++) {
                if ((allBooks[i].auther === book.auther) && (allBooks[i].title === book.title)) {
                    $scope.books.splice(i, 1);
                }
            }
            $scope.bookListMsg = "Book removed";
        }

        $scope.setBook = function(book){
            $scope.book = book;
            $state.go('bookDetails', {auther: book.auther});
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




        $scope.placeOrder = function(quantity) {
            var book = BookService.getBookToOrder();
            //book.inStock = parseInt(Number(book.inStock) - Number(quantity.orderQuantity));
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

    }])

})();