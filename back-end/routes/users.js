//routes/users.js 
const express = require('express'); //imports express framework
const {v4: uuidv4} = require('uuid'); //library for generating unique ids
const router = express.Router(); //creates a new express router