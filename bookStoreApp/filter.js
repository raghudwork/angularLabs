(function() {

    'use strict'

    angular.module('myApp').filter('searchAuther', function() {

        return function(books, autherSearchString) {

            if (!autherSearchString) {
                return books;
            }

            var result = [];

            autherSearchString = autherSearchString.toLowerCase();

            // Using the forEach helper method to loop through the booksay
            angular.forEach(books, function(book) {

                if (book.auther.toLowerCase().indexOf(autherSearchString) !== -1) {
                    result.push(book);
                }

            });

            return result;
        };

    });
})();