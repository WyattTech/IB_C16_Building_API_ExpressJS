const express = require("express");
const chirpsRouter = require("./chirps");

let router = express.Router(); //Creating a new route

router.use("/chirps", chirpsRouter);//Adding chirps to new router


module.exports = router; //Make router exportable