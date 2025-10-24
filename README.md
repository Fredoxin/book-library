Book Library Project

Overview
This project is a small object-oriented book library built with vanilla JavaScript, HTML, and CSS.
The goal is to practice object-oriented programming principles such as encapsulation, modularity, and separation of concerns, while exploring professional and scalable project structures similar to those used in larger frontend applications.
Structure
book-library/
│
├── index.html               # Main HTML entry point
├── assets/
│   ├── css/
│   │   └── style.css        # Base styles
│   ├── js/
│   │   ├── main.js          # Entry point, initializes app and events
│   │   ├── models/
│   │   │   └── Book.js      # Book class – represents a single book
│   │   ├── services/
│   │   │   └── Library.js   # Library class – manages the collection of books
│   │   └── ui/
│   │       └── LibraryView.js # Handles DOM rendering for the book list
│   └── images/
│
└── README.md

Features
Add and remove books from a library stored in memory
Display all books dynamically in the UI
Apply OOP design patterns for clean, modular code
Use classes, private fields, and getters/setters
Organized using a scalable folder and module structure (Models / Services / UI)

Goals
Practice object-oriented JavaScript with ES6+ features
Understand module imports/exports and maintainable project structure
Build a foundation for future features such as persistence, validation, and routing

Future Ideas
Implement filtering and searching
Get Book Covers and details autmatically.
Add persistence via localStorage
Add a book form with input validation

Further modularize UI components (e.g. separate BookView, FormView)