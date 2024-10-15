//   require('dotenv').config({path: './env'})
// Required to be imported as soon as possible in an application 
// So it helps if we want to use stuff from files like index.js in other files
// The require syntax used here degrades the consistency of code as furtherwe have used import statement 
// This iis a very common problem
// Solution :=

import dotenv from "dotenv"; // We have imported but it requires to config 

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
// This is experimental feature of npm => dotenv
// Adding experimental feature => 
    // package.json => scripts => "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
  

connectDB()

// function connectDb(){}
// connectDb()

// Ifie concept in javaacript
// Execute func immediately
// ()()

//  ;( async () => {})()
//  Professionally a semicolon is used before making a ifie function


//  Approach 1
//  Write the database connection logic in index.js 

/*
import express from  "express";
const app = express();

( async () => {
    try {
        await mongoose.connecct(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`app listening on ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ",  error)
        throw error
    }
})()

*/
