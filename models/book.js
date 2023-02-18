import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    title: String,
    author: String,
    edition: Number,
    description: String
}, {timestamps: true})

const Book = model("Book", bookSchema);

export default Book;