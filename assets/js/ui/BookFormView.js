import { insertTemplateToDOM } from "../util/ui-uitil.js";

export class BookFormView {

    constructor (templateName, library, libraryView) {
        this.library =  library;
        this.libraryView =  libraryView
        this.templateName = templateName;
        this.path = `./assets/templates/${templateName}`;
    }

    async initBookFormView () {
        try {
            // Fetch template and inser to DOM
            const response = await fetch(this.path);
            if (!response.ok) {
                throw new Error("Template not found: " + this.path);
            }
            const templateHTML = await response.text();
            insertTemplateToDOM(templateHTML);

            const addBookForm = document.querySelector(".addBookForm");
            addBookForm.addEventListener("submit", async (event) => { // wie warum genau async arrow
            event.preventDefault();
            const newBook = await this.library.handleBookSubmit(event);
                
            
            // await weil initLIbrar asaync ist?
            await this.libraryView.initLibraryView();
            this.libraryView.renderBooks();
            //TODO UI FEEDBACK
            console.log("Added book:", newBook.title, "id:", newBook.id);
            })


        } catch (error) {
                console.error(error.stack);
                console.error("initLibraryView error:", error);
                const errorMessageElement = document.querySelector(".errorMessage");
                if (errorMessageElement)
                    errorMessageElement.textContent = `${error.message}`;
                else {
                    console.error(error.message);
                }
                throw error;        
        }
    }
}