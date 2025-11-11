import { Library } from "./models/Library.js";
import { LibraryView } from "./ui/LibraryView.js";
import { BookFormView } from "./ui/BookFormView.js";

const library = new Library();
const libraryView = new LibraryView(library);
const bookFormView = new BookFormView(library, libraryView);
 
// Buttons
const addButton = document.querySelector(".button--add");
const deleteButton = document.querySelector(".button--delete");

//Event Listener
// TODO: Show Add Book Form
addButton.addEventListener("click", () => bookFormView.initBookFormView("addBookForm"));
deleteButton.addEventListener("click", () => bookFormView.initBookFormView("deleteBookForm"));
// Show delete or delete checked Books
//deleteButton.addEventListener("click", handleDelete);
    
    

window.addEventListener("DOMContentLoaded", () => {
    libraryView.renderBooks();
}); 
