const express = require('express');
const simpleRoute = require('./routes/simple-route');


const app = express();
app.use('/', simpleRoute);

module.exports = app;