import  Express  from "express";
import {register, login} from "../controller/authController.js"

const router = Express.Router();

// register route
router.post("/register", register);

// login route
router.post("/login", login)

export default router;