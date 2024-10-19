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
        if (this._isAvailable === true)
            return this._isAvailable
        else 
        console.log(`Is borrowed`)
}


}
