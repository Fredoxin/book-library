import { Book } from "../models/BookModel.js";

export class LibraryController {
     
    constructor (library) {
        this.library = library;
        this.libraryView = undefined;
    }

    addBookFormData (bookData) {
        
        try {
            const newBook =  new Book(bookData.title, bookData.cover, bookData.author, bookData.category, bookData.publisher, bookData.pages, bookData.doneReading)
            console.log("newbook", newBook)
            this.library.addBook(newBook);
            this.libraryView.renderBooks();
            return newBook

        } catch (error) {
            console.error("handleBookSubmit error:", error);
            throw error;
            }
    }

    // da view, controller braucht und controller view muss ich den view erst später setzen
    setView (view) {
        this.libraryView = view;
    }


    getLibraryContent () {
        return this.library.books;
    }
}