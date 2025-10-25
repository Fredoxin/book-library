import { Book } from "../models/Book.js";

export class Library {
    #books = [];
   
    
    handleBookSubmit (event) {
    const form = event.target; // Das Formular-Element
    const formData = new FormData(form); // FormData-Objekt erstellen

    const bookData = Object.fromEntries(formData.entries());        

    const newBook = new Book(bookData.title, bookData.cover, bookData.category, bookData.author, bookData.publisher, bookData.pages, bookData.doneReading, )
    console.log("newbook")
    this.addBook(newBook);
    }


    addBook (book) {
        this.#books.push(book);
        console.log(this.#books)
    }

    deleteBook (name) {
        // TODO find book by name and delete.
    }

    get books () {
        return this.#books;
    }
}
