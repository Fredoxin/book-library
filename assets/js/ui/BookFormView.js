export class BookFormView {

    constructor (libraryView, libraryController) {
        this.libraryController = libraryController;    
        this.libraryView =  libraryView
       // this.templateName = templateName;
        
    }

    async initBookFormView (bookFormTemplate) {
        // Set the path to the template dynamically
        const path = `./assets/templates/${bookFormTemplate}.html`;
        
        try {
            // Fetch template and inser to DOM
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error("Template not found at: " + path);
            }
            
            const templateHTML = await response.text();
            this.libraryView.insertTemplateToDOM(templateHTML);

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
            // Extract form-data and make js object
            const form = event.target; // Das Formular-Element
            const formData = new FormData(form); // FormData-Objekt erstellen
            const bookData = Object.fromEntries(formData.entries()); // macht ein JS Objekt aus formDatas

            
            try {
                await this.libraryView.initLibraryView();
                const newBook = await this.libraryController.addBookFormData(bookData);                
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