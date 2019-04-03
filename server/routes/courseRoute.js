const express = require('express');
const courseRoute = express.Router(); // eslint-disable-line new-cap
const Auth = require('../util/auth');
const CourseController = require('../controller/courseController');

courseRoute.get('/:courseId', Auth.isAuthenticated , CourseController.getCourseByID);
courseRoute.get('/', Auth.isAuthenticated, CourseController.getAllCource);
courseRoute.post('/', Auth.isAuthenticated , CourseController.addCourse);

module.exports = courseRoute;