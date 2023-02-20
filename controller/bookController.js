import book from "../models/book.js";

/////////// find existing books/////////////////
export const getAllbooks = async (req, res) => {
    try {
        const foundBooks = await book.find({});
        res.status(200).json({
            success: true,
            message: "all books gotten",
            data: foundBooks
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "no book found"
        })
    }
}

//////////////create new book///////////////////
export const createBook = async (req, res) => {
    const newBook = new book(req.body)
    try {
        await newBook.save();
        res.status(200).json({
            success: true,
            message: "new book created",
            data: newBook
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "cannot create book, try again"
        })
    }
}

////////////delete all books from store////////////
export const deleteAllBooks = async (req, res) => {
    const deleteAll = book.deleteMany({});
    try {
        await deleteAll;
        res.status(200).json({
            success:true,
            message: "all books deleted"
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "cannot delete book, try again"
        })
    }
}

////////////// delete a single book////////////////
export const deleteOneBook = async (req, res) => {
    const title = req.params.title;
    try {
        await book.findOneAndDelete({title: title});
        res.status(200).json({
            success: true,
            message: "book has been deleted successfully"
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "cannot delete the book"
        })
    }
}