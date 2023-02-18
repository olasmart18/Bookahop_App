import  express  from "express";
import dotenv from "dotenv";
import connect from "./config/database.js"

dotenv.config();

const port = process.env.PORT || 3030;
const app = express();

connect();

app.get("/test", (req, res)=> {
    res.status(200).json({
        success: true,
        message: "testing route"
    })
})

app.listen(port, () => console.log(`seving on port ${port}`));