export class Book {
    #id = 0;
    #title;
    #cover;
    #category;
    #author;
    #publisher;
    #pages;
    #donereading;

    constructor (title, cover = undefined,  author = "Not set", category = undefined, pages = undefined, publisher = undefined, doneReading = false) {
        this.#id++
        this.#title = title;
        this.cover = cover; // src path
        this.category = category;
        this.#author = author;
        this.publisher = publisher;
        this.pages = pages;
        this.doneReading = doneReading;
    }

    set title (title) {
        if (!title){throw new Error ("Empty title not allowed")}
        this.#title = title;
    }

    get title () {
        return this.#title;
    }

    set author (author) {
    if (!author){throw new Error ("Empty author not allowed in this operation")}
    this.#author = author;
    }

    get author () {
        return this.#author;
    }
}