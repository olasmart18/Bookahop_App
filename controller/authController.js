import userAuth from "../models/users.js"
import bcrypt  from "bcrypt"


export const register = async (req, res) => {
    const password = req.body.password
    const sortRounds = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(password, sortRounds);

    const newReg = new userAuth({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    })
    try {
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

export const login = async (req, res) => {
const email = req.body.email;
const password = req.body.password


    const userLogin = await userAuth.findOne({email: email})
    if(!userLogin){
        res.status(400).json({
            success:false,
            message: "Invalid usename"
        })
    }
        const checkPassword = await  bcrypt.compare(password, userLogin.password);
        if(!checkPassword){
           return res.status(401).json({
                success: false,
                message: "email or password incorrect, try again!"
            })
        }
        res.status(200).json({
            success: true,
            message: "successfully login"
        })
    }

