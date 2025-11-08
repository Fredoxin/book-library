import { Library } from "../services/Library.js";
import { insertTemplateToDOM } from "../util/ui-uitil.js";

export class BookFormView {

    constructor (library, libraryView) {
        this.library =  library;
        this.libraryView =  libraryView
       // this.templateName = templateName;
        
    }

    async initBookFormView (bookFormTemplate) {
        const path = `./assets/templates/${bookFormTemplate}.html`;
        try {
            // Fetch template and inser to DOM
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error("Template not found at: " + path);
            }
            
            const templateHTML = await response.text();
            insertTemplateToDOM(templateHTML);

            const bookForm = document.querySelector(`.${bookFormTemplate}`);
            if (!bookForm) {throw new Error ("Book form template not found")}

            const backToLibraryButton = document.querySelector(".backToLibraryButton");
            if (!backToLibraryButton) {throw new Error ("backToLibraryButton not found")} 

            backToLibraryButton.addEventListener("click", async () => {
                await this.libraryView.initLibraryView();
                this.libraryView.renderBooks()
            })
        

            bookForm.addEventListener("submit", async (event) => {
            console.count("submit") 
            event.preventDefault();
            
            try {
            const newBook = await this.library.handleBookSubmit(event);
            await this.libraryView.initLibraryView();
            this.libraryView.renderBooks();
            }         
            catch (error) {
                console.error(error.stack);
                const errorMessageElement = document.querySelector(".errorMessage");
                if (errorMessageElement) errorMessageElement.textContent = `${error.message}`;
                console.error(error.message);              
            }})
        } catch (error) {
                console.error(error.stack);
                console.error("init book form view error:", error);
                const errorMessageElement = document.querySelector(".errorMessage");
                if (errorMessageElement)
                    errorMessageElement.textContent = `${error.message}`;
                else {
                    console.error(error.message);
                }    
        }
    }
}