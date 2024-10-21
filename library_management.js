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
}