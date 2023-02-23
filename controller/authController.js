import userAuth from "../models/users.js"
import bcrypt from "bcrypt"

/////////// register new user //////////////
export const register = async (req, res) => {
    const password = req.body.password
    const email = req.body.email
    const sortRounds = bcrypt.genSaltSync(10)
    // hash password for security purpose
    const hashPassword = bcrypt.hashSync(password, sortRounds);

    // check if user email exist already in database
    const checkExist = await userAuth.findOne({ email: email })
    if (checkExist) {
        return res.status(400).json({
            success: false,
            message: "email already exist"
        })
    }

   
    const newReg = new userAuth({
        name: req.body.name,
        email: email,
        password: hashPassword
    })

    try {
         // if email does not exist, save new register
        const saveNewReg = await newReg.save()
        res.status(200).json({
            success: true,
            message: "successfully Register",
            data: saveNewReg
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: "failed, try again"
        })
    }
}

/////////// user login /////////////
export const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password

// if user email does not exist
    const userLogin = await userAuth.findOne({ email: email })
    if (!userLogin) {
        return res.status(400).json({
            success: false,
            message: "Invalid usename"
        })
    }
    // check user password , if it matches registered password
    const checkPassword = await bcrypt.compare(password, userLogin.password);
    if (!checkPassword) {
        return res.status(401).json({
            success: false,
            message: "email or password incorrect, try again!"
        })
    }
    res.status(200).json({
        success: true,
        message: "successfully login",
    })
}