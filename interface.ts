interface Books {
    id: number,
    title: string,
    description: string,
    authors: string,
    favorite: string,
    fileCover: string,
    fileName: string
}

interface Users {
    username: string,
    password: string,
    displayName: string,
    email: string
}

class BooksRepository implements Books {
    id: number
    title: string
    description: string
    authors: string
    favorite: string
    fileCover: string
    fileName: string

    constructor(id = 0, title = "", desctiption = "", authors = "", favorite = "", fileCover = "", fileName = ""){
        this.id = id
        this.title = title
        this.description = desctiption
        this.authors = authors
        this.favorite = favorite
        this.fileCover = fileCover
        this.fileName = fileName
    }

    createBook() {

    }

    getBook(id: number) {

    }

    getBooks(){

    }

    updateBook(id: number){

    }

    deleteBook(id: number){
        
    }
}