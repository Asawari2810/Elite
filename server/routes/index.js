const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const userRoutes = require('./userRoutes');
const courseRouter = require('./courseRoute');
const groupRouter = require('./groupRoutes');
const subjectRouter = require('./subjectRoutes');
const questionRouter = require('./questionRoutes');
const chapterRouter = require('./chapterRoutes');

router.get('/ping', (req, res) =>
  res.send('pong')
);

router.use('/course', courseRouter);
router.use('/group', groupRouter);
router.use('/subject', subjectRouter);
router.use('/user', userRoutes);
router.use('/question', questionRouter);
router.use('/chapter', chapterRouter);

module.exports = router;