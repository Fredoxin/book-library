import { Library } from "./services/Library.js";
import { Book } from "./models/Book.js";
import { LibraryView } from "./ui/LibraryView.js"


 
// Buttons
const addButton = document.querySelector(".libraryView>.button--add");
const deleteButton = document.querySelector(".libraryView>.button--delete");

//Event Listener
// TODO: Show Add Book Form
addButton.addEventListener("click", showAddBookForm);

// Show delete or delete checked Books
deleteButton.addEventListener("click", handleDelete);
    
    
window.addEventListener("load", () =>  new Library)