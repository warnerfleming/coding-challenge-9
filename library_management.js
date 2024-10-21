// Task 1

class Book {

    constructor(title, author, ISBN,){
        this.title = title
        this.author = author
        this.ISBN = ISBN 
        this._isAvailable = true 
    }

    getDetails(title, author, ISBN,){
        console.log(`${title}, ${author}, ${ISBN}`)
    }

    get isAvailable(){
        if (this._isAvailable === this._isAvailable)
            return true
        else 
            return false 
}
        set isAvailable(NewBook){
            if (this._isAvailable === this._isAvailable)
            return this._isAvailable
            else
            false 
        }
    }

    //Task 2

    class Section {

        constructor(name,book){
        this.name = name 
        this.books = []
    }

    addBook(books){
        this.books.push(book)

    }

    getAvailable(books){
        return this.books.filter ( book => book.isAvailable).length
    }

    listBooks(){
        return this.books
    }
//Task 5
    calculateTotalBooksAvailable(){ 
        return this.books.filter(book => book.isAvailable).length
    }
}


//Task 3

class Patron{
    constructor(name){
    this.name
    this.borrowedBooks = []
}
borrowBook(){
    if (!book.isAvailable){
        console.log(`Book is being borrowed at the moment`)
     } else {
        this.isAvailable = false
    console.log(`Book is now being borrowed`)
    }
}
returnBook(Book){
    if (book.isAvailable) {
        console.log(`Book is currently available`)
    }
    else {
  book.isAvailable = true 
  console.log (`Book has been returned`)

}}}


//Task 4

class VIPPatron extends Patron {
    constructor(name){
        super(name)
        this.priority = true 
}
borrowBook(book, priority = true){
    if (!book.isAvailable && priority)
        console.log(`Unavailable`) 
else if (!book.isAvailable) {
    console.log(`Unavailable`)
}
else 
console.log(`Book is open to be borrowed`)
}}



//Task 6 

const fantasy = new Section("Fantasy")
const Nonfiction = new Section("Nonfiction")

const book1 = new Book ("Harry Potter", "JK", "54")
const book2 = new Book ("Superhuman", "IDK", "43")

fantasy.addBook(book1)
Nonfiction.addBook(book2)

fantasy.listBooks()

const patron1 = new patron ("Jeff Smith")
const VIP = new VIPPatron ("Larry Greg")

patron1.borrowBook ("Jeff Smith")
VIP.borrowBook ("Larry Greg")

VIP.returnBook(book2)
