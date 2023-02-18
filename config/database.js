import mongoose from "mongoose";

mongoose.set("strictQuery", true)

const db = "bookshopDB";

const connect = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI + db)
       console.log("CONNECTED TO DB");
    } catch (error) {
        console.log(error);
    }
}
export default connect;