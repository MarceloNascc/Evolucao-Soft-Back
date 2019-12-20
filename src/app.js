require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//LOGIN SESSION
const sessionRouter = require('./modules/session/sessionRouter');
app.use('/session', sessionRouter());

//STORE USER
const userRouter = require('./modules/user/userRouter');
app.use('/user', userRouter());

module.exports = app;