import user from "../models/users.js"

//////////// get all user ////////////////
export const getAllUser = async (req, res) => {
    try {
        const users = await user.find({})
        if(users.length === 0){
            res.status(200).send("no user found");
        }
        res.status(200).json({
            success: true,
            message: "Users found",
            data: users
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "no user found"
        })
    }
}

export const getSingleUser = async (req, res) => {
    const id = req.params.id
    try {
        const singleUser = await user.findById(id);
        res.status(200).json({
            success: true,
            message: "user found",
            data: singleUser
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "no user with the id found"
        })
    }
}

////////// create new user /////////////////
export const createNewUser = async (req, res) => {

    const newReg = new user(req.body)

    try {
        const saveNewUser = await newReg.save();
         res.status(200).json({
            success: true,
            message: "successfully",
            data: saveNewUser
        })

    } catch (error) {
        res.status(401).json({
            success: false,
            message: "failed, please try again"
        })
    }
}

//////// update users //////////
export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updateOne = await user.findByIdAndUpdate(id,
            { $set: req.body },
            { new: true });
        res.status(200).json({
            success: true,
            message: "user updated",
            data: updateOne
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "failed, please try again"
        })
    }
}

/////////// delete users /////////////
export const deleteUsers = async (req, res) => {
    try {
        await user.deleteMany({});
        res.status(200).json({
            success: true,
            message: "all user deleted"
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "failed, please try again"
        })
    }
}

////////// delete single user ////////////////
export const deleteSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        await user.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "user deleted"
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "failed, please try again"
        })
    }
}