import { Book } from "../models/Book.js";

class Library {
    #books = [];
    
    
    addBook (book) {
        this.#books.push(book);
    }

    deleteBook (name) {
        // TODO find book by name and delete.
    }

    get books () {
        return this.#books;
    }
}
