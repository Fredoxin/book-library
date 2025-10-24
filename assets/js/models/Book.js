export class Book {
    #title
    #author

    constructor (title, author = "Not set", doneReading = false) {
        this.#title = title;
        this.#author = author;
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

    get autho () {
        return this.#author;
    }
}