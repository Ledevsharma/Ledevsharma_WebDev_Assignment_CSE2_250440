import dotenv from "dotenv";
import connectDB from "./config/database.js";
import { app } from "./utils/app.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running at port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed: ", error);
    });