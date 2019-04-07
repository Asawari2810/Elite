const express = require('express');
const chapterRoute = express.Router(); // eslint-disable-line new-cap
const Auth = require('../util/auth');
const ChapterController = require('../controller/chapterController');

chapterRoute.get('/:chapterId', Auth.isAuthenticated , ChapterController.getChapterByID)
chapterRoute.post('/', Auth.isAuthenticated, ChapterController.addChapter)
//chapterRoute.get('/subject/:subjectId', Auth.isAuthenticated, ChapterController.getChapterBySubjectID)

module.exports = chapterRoute;