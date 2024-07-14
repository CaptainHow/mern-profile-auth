import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config({ path: "../.env" });

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

app.use(express.json())
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/auth", authRoutes)