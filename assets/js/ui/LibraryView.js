export class LibraryView {

    constructor (library) {
        
        if (!library) {throw new Error ("Library required");}
        this.library = library;
        
    }

    renderBooks () {
        // get books
        const books = this.library.books;
        const bookListElement = document.querySelector(".book-list");
       
        try {
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
                console.error(error.stack);
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
        cover.alt = book.author === "" ? `${book.title}` : `${book.title} by ${book.author}`;
            
        //insert cover into bookElement and book into bookListElement
        bookElement.append(cover);
        bookListElement.append(bookElement);
        })
    }

  async initLibraryView () {
        const path = "./assets/templates/libraryView.html";
        const response = await fetch(path);
        if (!response.ok) {throw new Error ("Template not found");}
        const libraryViewHtml = await response.text();
        this.insertTemplateToDOM(libraryViewHtml);
    }


    insertTemplateToDOM (html) {
    if (!html) {
        throw new Error("No template found");
    }

    const app = document.querySelector(".app");
    if (!app) {
        throw new Error("Target container not found");
    }

    // Neues Template-Tag erstellen
    const templateTag = document.createElement("template");
    templateTag.innerHTML = html;

    // Zielcontainer bereinigen und Template-Inhalt einfügen
    app.innerHTML = ""; // Vorherigen Inhalt löschen
    app.append(templateTag.content.cloneNode(true));
    }

}