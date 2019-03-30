const express = require('express');
const courseRoute = express.Router(); // eslint-disable-line new-cap
const Auth = require('../util/auth');
const CourseController = require('../controller/courseController');

courseRoute.get('/:courseId', Auth.isAuthenticated , CourseController.getCourseByID)
// collectionRouter.get('/:collectionId', Auth.isAuthenticated ,CollectionController.getAllcollectionById)
// collectionRouter.get('/:collectionId/post', Auth.isAuthenticated ,PostController.getAllPostByCollectionId)

courseRoute.post('/', Auth.isAuthenticated , CourseController.addCourse)
// collectionRouter.patch('/:collectionId', Auth.isAuthenticated ,CollectionController.editCollection)
// collectionRouter.get('/:collectionId/followers',CollectionController.getcollectionFollowers)
// collectionRouter.delete('/:collectionId', Auth.isAuthenticated ,CollectionController.deleteCollection)

module.exports = courseRoute;