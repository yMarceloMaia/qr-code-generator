import mongoose from "mongoose";
import "dotenv/config"

const connectionString = process.env.MONGODB_PASS as string

mongoose.connect(connectionString, {})
    .then(() => console.log("Mongodb connected"))
    .catch((error) => console.log(error));

const db = mongoose.connection;

db.on("error", (error) => {
    console.error(error);
});

db.once("open", () => {
    console.log("Database connected");
});

export default db;
