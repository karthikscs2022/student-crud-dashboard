const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const studentRoutes = require('./routes/studentRoutes');
app.use('/students', studentRoutes);

module.exports = app;