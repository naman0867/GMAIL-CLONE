import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();

const PORT = 8080;

// database connection
connectDB();


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


// routes
app.use("/api/v1/user", userRoute);


// server
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});