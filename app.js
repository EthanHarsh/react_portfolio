require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'react_portfolio/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'react_portfolio/build/index.html'));
});

module.exports = app;
