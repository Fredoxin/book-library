import { Book } from "../models/Book.js";

export class Library {
    #books = [];
   
    // Muss technisch noch nicht async sein, könnte sich später ändern.
    // Offene Faustregel: Wenn eine Funktion jemals async sein könnte → jetzt schon async setzen.
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
