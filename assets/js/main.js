import { Library } from "./services/Library.js";
import { LibraryView } from "./ui/LibraryView.js";
import { BookFormView } from "./ui/BookFormView.js";

const library = new Library();
const libraryView = new LibraryView(library);
const bookFormView = new BookFormView("addBookForm.html", library, libraryView);
 
// Buttons
const addButton = document.querySelector(".button--add");
const deleteButton = document.querySelector(".button--delete");

//Event Listener
// TODO: Show Add Book Form
addButton.addEventListener("click", () => new BookFormView("addBookForm.html", library, libraryView).initBookFormView());
deleteButton.addEventListener("click", () => new BookFormView("deleteBookForm.html", library, libraryView).initBookFormView());
// Show delete or delete checked Books
//deleteButton.addEventListener("click", handleDelete);
    
    

window.addEventListener("DOMContentlLoaded", () => {
    libraryView.renderBooks();
}); 
