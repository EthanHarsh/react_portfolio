require('dotenv').config();
const express = require('express');
const Project = require('./models/projectModel');



const app = express();


//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());


module.exports = app;