const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./Routes/userRoutes');
const questionRouter = require('./Routes/questionRoutes');
const answerRouter = require('./Routes/answerRoutes');
const methodOverRide = require("method-override");
// const nodemailer = require('./config/nodemailer')
const path = require('path')

const accueilRouter = require('./Routes/accueilRoutes')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use("/public", express.static(__dirname + "/public"));

mongoose.Promise = global.Promise;
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('json spaces', 2);
app.use(methodOverRide('_method'));
app.use('/user', userRouter);
app.use('/question', questionRouter);
app.use('/answer',answerRouter);
app.use('/',accueilRouter)


module.exports = app;
