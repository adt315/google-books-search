const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const port = process.env.port || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.use(routes);



app.listen(port, ()=> {
    console.log(`Server started on ${port}`);
})