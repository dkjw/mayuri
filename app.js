const express = require('express');
const app = express();

const model=require('./model/../model')


const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

const router=require("./router");


app.use=("/api/",router);

app.listen(3000,() =>{
    console.log("server started");
})