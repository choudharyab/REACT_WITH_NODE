const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const  https = require('https');
const fs = require('fs');
const ejs = require('ejs');
const mongoose = require('mongoose');
const config = require('../db/config.js');
const db = mongoose.connect(config.mongoUrl);
const keys = require('../init/keys');
const cors = require('cors')
const usersRoutes = require('../routes/user.routes');
const threadRoutes=require('../routes/thread.routes');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/users', usersRoutes);
app.use('/api/thread',threadRoutes);
mongoose.Promise = global.Promise;

mongoose.connection.on('error', (err) => {
    console.error(err);
    console.log('MongoDB connection error. Please make sure MongoDB is running.');
    process.exit();
});

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization,Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



app.set('view engine', 'hjs');
app.set('port', process.env.PORT || 3001);


module.exports = app;
