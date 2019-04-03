const express = require('express');
const userFullTestRoute = express.Router(); // eslint-disable-line new-cap
const Auth = require('../util/auth');
const UserFullTestController = require('../controller/userFullTestController');

userFullTestRoute.post('/', Auth.isAuthenticated, UserFullTestController.submitFullTest);
userFullTestRoute.get('/:userFullTest', Auth.isAuthenticated, UserFullTestController.getFullTestById);
userFullTestRoute.get('/subjectId/:subjectId', Auth.isAuthenticated, UserFullTestController.getFullTestScore);

module.exports = userFullTestRoute;