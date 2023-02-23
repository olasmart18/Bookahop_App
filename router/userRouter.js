import express from "express";
import {
    getAllUser,
    getSingleUser,
    createNewUser,
    updateUser,
    deleteUsers,
    deleteSingleUser
} from "../controller/userController.js"

const router = express.Router();

// get all user 
router.get("/",getAllUser);

//get single user
router.get("/:id", getSingleUser);

// create new user
router.post("/", createNewUser);

// update user
router.put("/:id", updateUser);

//delete all user
router.delete("/", deleteUsers);

// delete single user
router.delete("/:id", deleteSingleUser);

export default router;