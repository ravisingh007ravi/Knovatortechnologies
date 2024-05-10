const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const route = require('./route/routes.js');
const app=express();
const port = process.env.PORT || 5001;


const url ="mongodb+srv://ravi6680singh:R%40vi786R%40vi@cluster0.viocq1u.mongodb.net/Knovatortechnologies=true&w=majority";
mongoose.set('strictQuery', true);

app.use(multer().any());
app.use(express.json());

mongoose.connect(url)
.then(() => console.log("Mongoose is Connected"))
.catch((err) => console.log(err));

app.use('/',route);

app.listen(port, () => console.log(`Server is Running Succesfully ${port}`));