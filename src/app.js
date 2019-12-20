require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//LOGIN SESSION
const sessionRouter = require('./modules/session/sessionRouter');
app.use('/api/session', sessionRouter());

//STORE USER
const userRouter = require('./modules/user/userRouter');
app.use('/api/user', userRouter());

//CRUD STUDENT
const studentRouter = require('./modules/student/studentRouter');
app.use('/api/student', studentRouter());

module.exports = app;