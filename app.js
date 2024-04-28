const express = require('express');
const characterRoutes = require('./routes/index');
const logMiddleware = require('./server/middlewares/logMiddleware');
const errorHandlingMiddleware = require('./server/middlewares/errorHandlingMiddleware');
const app = express();

// middlewares
app.use(logMiddleware);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// character routes
app.use(characterRoutes);

// error handling middleware
app.use(errorHandlingMiddleware);

var port = "3000";
app.set('port', port);

module.exports = app;