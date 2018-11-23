const express = require('express');
const path = require('path');
const parse = require('body-parser');

const app = express();

// configuracion server

app.set('port', process.env.PORT || 3001);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

// middleware

app.use(parse.urlencoded({extended: false}));
module.exports = app;