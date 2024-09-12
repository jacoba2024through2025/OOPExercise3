class Book {
    constructor(title, author, publicationYear) {
        this.title = title
        this.author = author
        this.publicationYear = publicationYear
    }
    displayDetails() {
        console.log(`Title: ${this.title}`)
        console.log(`Author: ${this.author}`)
        console.log(`Publication Year: ${this.publicationYear}`)
        
    }
}

class Ebook extends Book {
    constructor(title, author, publicationYear, price) {
        super(title, author, publicationYear)
        this.price = price
        
        

    }
    displayDetails() {
        console.log(`Title: ${this.title}`)
        console.log(`Author: ${this.author}`)
        console.log(`Publication Year: ${this.publicationYear}`)
        console.log(`Price: $${this.price}`)
        
    }
    
}