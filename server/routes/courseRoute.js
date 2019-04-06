const express = require('express');
const courseRoute = express.Router(); // eslint-disable-line new-cap
const Auth = require('../util/auth');
const CourseController = require('../controller/courseController');

courseRoute.get('/:courseId', Auth.isAuthenticated , CourseController.getCourseByID);
courseRoute.get('/', Auth.isAuthenticated, CourseController.getAllCource);
courseRoute.post('/', Auth.isAuthenticated , CourseController.addCourse);
//courseRoute.get('/group', Auth.isAuthenticated, CourseController.getAllCource);

//courseRoute.get('/getGroup', Auth.isAuthenticated , CourseController.getCourseAlongGroup)

module.exports = courseRoute;