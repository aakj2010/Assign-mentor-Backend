const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const mentorRouter = require('./routers/MentorRouter');
const studentRouter = require('./routers/StudentRouter');
const connectDB = require("./config/db");


const PORT = process.env.PORT || 3100;
const URL = process.env.MONGODB_URL;

connectDB();

const app = express();


app.use(express.json());

app.use(cors({
    origin: "*",
    credentials: true     /* To avoid cross origin error */
}))


app.use("/Mentors", mentorRouter);
app.use("/Students", studentRouter);


app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`))