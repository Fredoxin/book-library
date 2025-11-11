import { Book } from "./Book.js";

export class Library {
    #books = [];
   
    addBookFormData (bookData) {
        try {
            const newBook =  new Book(bookData.title, bookData.cover, bookData.author, bookData.category, bookData.publisher, bookData.pages, bookData.doneReading)
            console.log("newbook", newBook)
            this.addBook(newBook);
            return newBook

        } catch (error) {
            console.error("handleBookSubmit error:", error);
            throw error;
        }
    }


    addBook (book) {
        for (let i = 0; i < this.#books.length; i++){
            if (book.title.toLowerCase() === this.#books[i].title.toLowerCase()){
                throw new Error ("Book already in library")
            }   
        }
        this.#books.push(book);
        console.log(this.#books)
    }

    deleteBook (title = undefined) {
        if (!title) {throw new Error ("Enter a valid title")}
        this.#books = this.#books.filter(book => book.title.toLowerCase() != title.toLowerCase())

    }

    get books () {
        return this.#books;
    }
}
