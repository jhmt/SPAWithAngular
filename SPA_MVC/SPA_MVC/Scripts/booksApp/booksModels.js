var bookModel = function (book) {
    this.title = book.title;
    this.authorNames = book.authors[0].fullName;
    if (book.authors.length > 1) {
        for (i = 1; i < book.authors.length; i++) {
            this.authorNames = this.authorNames + ", " + book.authors[i].fullName;
        }
    }
};