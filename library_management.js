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

const B1 = newBook ("HP", "JK", 7, true)
console.log(B1.title)