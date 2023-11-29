function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

function Book(title, author, genre, price) {
    this.title = title;
    this.author = author; // Author object
    this.genre = genre;
    this.price = price;
}

Book.prototype.getBookInfo = function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
    console.log('------------------------');
};

let author1 = new Author('J.K. Rowling', 1965, 'British');
let book1 = new Book('Harry Potter and the Sorcerer\'s Stone', author1, 'Fantasy', 25.99);

let author2 = new Author('George R.R. Martin', 1948, 'American');
let book2 = new Book('A Game of Thrones', author2, 'Epic Fantasy', 29.99);

let author3 = new Author('Agatha Christie', 1890, 'British');
let book3 = new Book('Murder on the Orient Express', author3, 'Mystery', 19.99);

let author4 = new Author('Harper Lee', 1926, 'American');
let book4 = new Book('To Kill a Mockingbird', author4, 'Fiction', 22.99);

let author5 = new Author('J.R.R. Tolkien', 1892, 'British');
let book5 = new Book('The Hobbit', author5, 'Fantasy', 20.99);

let author6 = new Author('Jane Austen', 1775, 'British');
let book6 = new Book('Pride and Prejudice', author6, 'Classic', 18.99);

let author7 = new Author('Dan Brown', 1964, 'American');
let book7 = new Book('The Da Vinci Code', author7, 'Mystery', 24.99);


book1.getBookInfo();
book2.getBookInfo();
book3.getBookInfo();
book4.getBookInfo();
book5.getBookInfo();
book6.getBookInfo();
book7.getBookInfo();