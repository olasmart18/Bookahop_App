import  Express  from "express";
import {register, login} from "../controller/authController.js"

const router = Express.Router();

router.post("/register", register);
router.post("/login", login)

export default router;