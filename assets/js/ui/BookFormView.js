export class BookFormView {

    constructor (templateName, library, libraryView) {
        this.library =  library;
        this.libraryView =  libraryView
        this.templateName = templateName;
        this.path = `./assets/templates/${templateName}`;
    }

    async showBookForm () {
        try {
            // Fetch template and inser to DOM
            const response = await fetch(this.path);
            if (!response.ok) {
                console.error("Failed to fetch template:", this.path, "status:", response.status);
                throw new Error("Template not found: " + this.path);
            }
            const templateHTML = await response.text();
            this.insertTemplateToDOM(templateHTML);

            // Add eventlisteners
            const addBookForm = document.querySelector(".addBookForm");
            if (!addBookForm) {
                throw new Error("Element '.addBookForm' not found in the DOM");
                }
            addBookForm.addEventListener("submit", async (event) => { // wie warum genau async arrow
                event.preventDefault();
                const newBook = await this.library.handleBookSubmit(event);
                
                //TODO UI FEEDBACK
                console.log("Added book:", newBook.title, "id:", newBook.id);
                
                await this.libraryView.initLibraryView();
                this.libraryView.renderBooks();
                })


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
    //für Library.js




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