const express = require('express');
const createUser = require('./userConroller');

const userRouter = express.Router();

userRouter.post('/textpost',createUser)


module.exports = userRouter;