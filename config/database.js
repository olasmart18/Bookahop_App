import mongoose from "mongoose"; // import mongoose module

mongoose.set("strictQuery", true) // silense deprication warning

const db = "bookshopDB"; // database name

const connect = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI + db) // wait for connection in mongodb
       console.log("CONNECTED TO DB"); // log connection statement in the console
    } catch (error) {
        console.log(error); // return mongoose error if not connected
    }
}
export default connect; // export mongoose connection 