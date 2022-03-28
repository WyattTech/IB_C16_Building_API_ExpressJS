const express = require('express');
const cors  = require('cors');

//Import Routers
const apiRouter = require('./routes');//Server goes an looks in the folder and grabs the files.

let app = express();//Pull in Express

/* Middleware */
app.use(cors());
app.use(express.json());//Will parse JSON content that posted to our API to use it like JS object

app.use('./api', apiRouter);//use this routers on the api routes

app.listen(3000);