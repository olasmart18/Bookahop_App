// destructure schema amd model to use mongoose module
import { Schema, model } from "mongoose"; 

// book schema, each book in store contain this attribute
const bookSchema = new Schema({
    title: String,
    author: String,
    edition: String,
    description: String
}, {timestamps: true})

//bok model, create books collection in the database
const Book = model("Book", bookSchema);

export default Book; // export the book model to controller file