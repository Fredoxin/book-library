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
                throw new Error("Template not found at: " + this.path);
            }
            
            const templateHTML = await response.text();
            insertTemplateToDOM(templateHTML);

            const addBookForm = document.querySelector(".addBookForm");
            if (!addBookForm) {throw new Error ("Book form not found")}

            addBookForm.addEventListener("submit", async (event) => {
            console.count("submit") 
            event.preventDefault();
            
            try {
            const newBook = await this.library.handleBookSubmit(event);
            await this.libraryView.initLibraryView();
            this.libraryView.renderBooks();
            }         
            catch (error) {
                const errorMessageElement = document.querySelector(".errorMessage");
                if (errorMessageElement) errorMessageElement.textContent = `${error.message}`;
                console.error(error.message);              
            }})
        } catch (error) {
                console.error(error.stack);
                console.error("initLibraryView error:", error);
                const errorMessageElement = document.querySelector(".errorMessage");
                if (errorMessageElement)
                    errorMessageElement.textContent = `${error.message}`;
                else {
                    console.error(error.message);
                }    
        }
    }
}