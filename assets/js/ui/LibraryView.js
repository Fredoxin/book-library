import { Library } from "./services/Library.js";

class LibraryView {

    constructor (library) {
        
        if (!library) {throw new Error ("Library required");}
        this.library = library;
        
    }

    renderBooks () {
        let books;
        let bookListElement;
       
        try {
            // get books
            books = this.library.books;
            bookListElement = document.querySelector(".book-list");
            // check if there is a booklistElement  
            if (!bookListElement) { throw new Error ("No bookListElement found in DOM");}
             // check if library is empty
            if (books.length === 0) {
                bookListElement.textContent = "Keine Bücher vorhanden.";
                return;
                }       
            // Empty booklistElment
            bookListElement.innerHTML = "";    

            } catch (error) {
                const errorMessageElement = document.querySelector(".errorMessage");
                if (errorMessageElement)
                    errorMessageElement.textContent = `${error.message}`;
                else {
                    console.error(error.message);
                }
            return; // If error, abort.        
        }

        // If there is no errors
        // iterate over books
        books.forEach(book => {
        //create book element and cover. 
        const bookElement = document.createElement("div");
        const cover = document.createElement("img");
        cover.src = `${book.cover}`;
        cover.alt = book.author === undefined ? `${book.title}` : `${book.title} by ${book.author}`;
            
        //insert cover into bookElement and book into bookListElement
        bookElement.append(cover);
        bookListElement.append(bookElement);
        })
    }

}