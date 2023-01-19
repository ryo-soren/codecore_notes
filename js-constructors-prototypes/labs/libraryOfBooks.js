class Book{
    constructor(title, author, edition){
        this.author = author
        this.title = title
        this.edition = edition
    }
}

class Library{

    constructor(){
        this.books = []
    }


    shelve(book){
        this.books.push(book)
        this.books.sort()
    }

    findByTitle(title){

        for (const book of this.books) {
            for (const element in book) {
                if(typeof book[element] === "string"){
                    if(book[element].toLowerCase() === title.toLowerCase()){
                        return book
                    }
                }
            }
        }
    }
    

    list(){

        return this.books
    }

}

const lib = new Library
const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book("The Rust Programming Language", ["Steve Klabnik", "Carol Nichols"], 2);

lib.shelve(eloquentJS)
lib.shelve(speakingJS)
lib.shelve(theRustProgLang)

console.log(lib.findByTitle("speaking JavaScript"))