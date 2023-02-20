import  express  from "express";
import dotenv from "dotenv";
import connect from "./config/database.js"
import routes from "./router/bookRoute.js"
import { json } from "express";

dotenv.config();

const port = process.env.PORT || 3030;
const app = express();
app.use(json())

app.use("/book", routes)

connect();

app.get("/test", (req, res)=> {
    res.status(200).json({
        success: true,
        message: "testing route"
    })
})

app.listen(port, () => console.log(`seving on port ${port}`));