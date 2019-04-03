const express = require('express');
const subjectRoute = express.Router(); // eslint-disable-line new-cap
const Auth = require('../util/auth');
const SubjectController = require('../controller/subjectController');

subjectRoute.get('/:subjectId', Auth.isAuthenticated , SubjectController.getSubjectByID)
subjectRoute.post('/', Auth.isAuthenticated, SubjectController.addSubject);
subjectRoute.get('/', Auth.isAuthenticated, SubjectController.getAllSubject);

module.exports = subjectRoute;