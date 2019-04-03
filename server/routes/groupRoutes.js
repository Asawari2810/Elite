const express = require('express');
const groupRoute = express.Router(); // eslint-disable-line new-cap
const Auth = require('../util/auth');
const GroupController = require('../controller/groupController');

groupRoute.get('/:groupId', Auth.isAuthenticated , GroupController.getGroupByID);
groupRoute.post('/', Auth.isAuthenticated, GroupController.addGroup);
groupRoute.get('/', Auth.isAuthenticated, GroupController.getAllGroup);

module.exports = groupRoute;