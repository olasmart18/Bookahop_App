import book from "../models/book.js";

/////////// get all existing books/////////////////
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

////////////// get a single book ///////////////
export const getSingleBook = async (req, res) => {
    const getSingleBook = req.params.title
    try {
       const foundBook = await book.findOne({title: getSingleBook})
        res.status(200).json({
            success: true,
            message: "book found",
            data: [getSingleBook, foundBook]
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: " no book with this title was found"
        })
    }
}

/////////////// get a single book by search/////////////////


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
            success: true,
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
        await book.findOneAndDelete({ title: title });
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

///////////update a book from the store////////////
export const updateBook = async (req, res) => {
    const updateBook = req.params.title
    try {
        await book.findOneAndUpdate({title: updateBook},
            {$set: req.body},
            {new: true});
            res.status(200).json({
                success: true,
                message: "successfully update data",
                data: req.body
            })
    } catch (error) {
        res.status(200).json({
             success: false,
        message: " cannot update data"
        });
    }
}