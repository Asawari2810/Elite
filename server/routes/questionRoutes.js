const express = require('express');
const questionRoutes = express.Router(); // eslint-disable-line new-cap
const Auth = require('../util/auth');
const QuestionController = require('../controller/questionController');

//questionRoutes.get('/:chapterId', Auth.isAuthenticated , QuestionController.getChapterByID)
questionRoutes.post('/', Auth.isAuthenticated, QuestionController.addQuestion);
questionRoutes.get('/fullTest', Auth.isAuthenticated, QuestionController.getFullTest);
questionRoutes.get('/chapterTest', Auth.isAuthenticated, QuestionController.getChapterTest);

module.exports = questionRoutes;