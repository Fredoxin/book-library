export class BookFormView {

    constructor (templateName) {
        this.templateName = templateName;
        this.path = `./assets/templates/${templateName}`;
    }

    async showBookForm () {
        try {
            // Fetch template and inser to DOM
            const response = await fetch(this.path);
            if(!response.ok) {throw new Error ("Template not found")}
            const templateHTML = response.text();
            this.insertTemplateToDOM(templateHTML);

            // Add eventlisteners
            const addBookFormButton = document.querySelector(".addBookFormButton");
            addBookFormButton.addEventListener("submit", (event) => {
                this.Library.handleBookSubmit(event)
                this.LibraryView.initLibraryView();
                this.LibraryView.renderBooks();
            })


        } catch (error) {
                const errorMessageElement = document.querySelector(".errorMessage");
                if (errorMessageElement)
                    errorMessageElement.textContent = `${error.message}`;
                else {
                    console.error(error.message);
                }
            
        }
        return; // If error, abort.  

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