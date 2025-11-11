export function createBookElement (book) {
    if (!book) {throw new Error ("book is missing");}
            
    const bookElement = document.createElement("div");
    bookElement.className = "book";
    const cover = document.createElement("img");
    //TODO the cover needs to be implemented differently
    //Set src only if there is a cover to not display broken image symbol
    if (book.cover) {
        cover.src = book.cover;
    } else {
        cover.removeAttribute("src");
    }
    cover.alt = !book.author ? book.title : `${book.title} by ${book.author}`;    
    //insert cover into bookElement
    bookElement.append(cover);

    return bookElement;
}
