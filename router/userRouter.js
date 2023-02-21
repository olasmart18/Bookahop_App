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

router.get("/",getAllUser);
router.get("/:id", getSingleUser);
router.post("/", createNewUser);
router.put("/:id", updateUser);
router.delete("/", deleteUsers);
router.delete("/:id", deleteSingleUser);

export default router;