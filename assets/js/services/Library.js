import { Book } from "../models/Book.js";

export class Library {
    #books = [];
   
    
    async handleBookSubmit (event) {
        try {
            const form = event.target; // Das Formular-Element
            const formData = new FormData(form); // FormData-Objekt erstellen
            // macht ein JS Objekt aus formDatas
            const bookData = Object.fromEntries(formData.entries());        

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
        this.#books.push(book);
        console.log(this.#books)
    }

    deleteBook () {
        
    }

    deleteBook (name) {
        // TODO find book by name and delete.
    }

    get books () {
        return this.#books;
    }
}
