const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

//Define middleware
app.use(express.urlencoded({ extended:true }));
app.use(express.json());


//API routes

// app.use(routes);



app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})