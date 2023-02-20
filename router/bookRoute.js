import express from "express";
import {
    getAllbooks,
    createBook,
    deleteAllBooks,
    deleteOneBook,
    getSingleBook,
    updateBook
} from "../controller/bookController.js";

// use the router module with express
const router = express.Router();

// get all books from store
router.get("/", getAllbooks);

// get a single book from store
router.get("/:title", getSingleBook);

// create and save new book to store
router.post("/", createBook);

// delete all books from store 
router.delete("/", deleteAllBooks);

//delete single book from store
router.delete("/:title", deleteOneBook);

// update va book from the store
router.put("/:title", updateBook)

export default router;