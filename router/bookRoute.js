import express from "express";
import {
    getAllbooks,
    createBook,
    deleteAllBooks,
    deleteOneBook
} from "../controller/bookController.js";

// use the router module with express
const router = express.Router();

// get all books from store
router.get("/", getAllbooks);

// create and save new book to store
router.post("/", createBook);

// delete all books from store 
router.delete("/", deleteAllBooks);

//delete single book from store
router.delete("/:title", deleteOneBook);

export default router;