import { Library } from "./models/LibraryModel.js";
import { LibraryView } from "./ui/LibraryView.js";
import { BookFormView } from "./ui/BookFormView.js";
import { LibraryController } from "./controller/LibraryController.js";

const library = new Library();
const libraryController = new LibraryController(library)
const libraryView = new LibraryView(libraryController);
const bookFormView = new BookFormView(libraryView, libraryController);
 

window.addEventListener("DOMContentLoaded", () => {
    init();
    libraryView.renderBooks();
}); 
//Initilizes navbar buttons
function init () {
    const addButton = document.querySelector(".button--add");
    const deleteButton = document.querySelector(".button--delete");
    addButton.addEventListener("click", () => bookFormView.initBookFormView("addBookForm"));
    deleteButton.addEventListener("click", () => bookFormView.initBookFormView("deleteBookForm"));
    }
