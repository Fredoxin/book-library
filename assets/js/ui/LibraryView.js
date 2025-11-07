import { insertTemplateToDOM } from "../util/ui-uitil.js";
import { createBookElement } from "./components/createBookElement.js";

export class LibraryView {

    constructor (library) { 
        if (!library) {throw new Error ("Library required");}
        this.library = library;     
    }

    renderBooks () {
        try {
             // get books
            const books = this.library.books;
            const bookListElement = document.querySelector(".book-list");
            // check if there is a booklistElement  
            if (!bookListElement) { throw new Error ("No bookListElement found in DOM");}
             // check if library is empty
            if (books.length === 0) {
                bookListElement.textContent = "Keine Bücher vorhanden.";
                return;
                }       
            
            bookListElement.innerHTML = "";
            books.forEach(book => bookListElement.append(createBookElement(book)))

            } catch (error) {
                console.error(error.stack);
                const errorMessageElement = document.querySelector(".errorMessage");
                if (errorMessageElement)
                    errorMessageElement.textContent = `${error.message}`;
                else {
                    console.error(error.message);
                }        
        }
    }

  async initLibraryView () {
        const path = "./assets/templates/libraryView.html";
        
     try {   
        const response = await fetch(path);
        if (!response.ok) {throw new Error ("Template not found");}
        const libraryViewHtml = await response.text();
        insertTemplateToDOM(libraryViewHtml);
        } catch (error) {
            console.error(error.stack);
            const errorMessageElement = document.querySelector(".errorMessage");
            if (errorMessageElement)
                {errorMessageElement.textContent = error.message;}
            else {
                console.error(error.message);
            }
        throw error;       
        }
    }
}