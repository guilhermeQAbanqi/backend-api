const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.DATABASE_URL)
const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

connectDB().catch(err => console.log(err)); 

const PORT = 8080
const HOST = '0.0.0.0'

async function connectDB() {
await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => console.log("DB Connection Success"))
    .catch((err) => console.log(err));
}

app.listen(PORT,HOST)
console.log("Backend Server is running");   

const routes = require('./routes/user_registration');
app.use('/api', routes)
