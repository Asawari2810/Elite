const express = require('express');
const userChapterTestRoute = express.Router(); // eslint-disable-line new-cap
const Auth = require('../util/auth');
const UserChapterTestController = require('../controller/userChapterTestController');

userChapterTestRoute.post('/', Auth.isAuthenticated, UserChapterTestController.submitChapterTest);
userChapterTestRoute.get('/:userChapterTest', Auth.isAuthenticated, UserChapterTestController.getChapterTestById)

module.exports = userChapterTestRoute;