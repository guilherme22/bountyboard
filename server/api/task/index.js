'use strict';

var express = require('express');
var controller = require('./task.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/',auth.isAuthenticated(), controller.index);
router.get('/:id', controller.show);
router.post('/', auth.hasRole('recruiter'), controller.create);
router.put('/:id', auth.hasRole('recruiter'),controller.update);
router.patch('/:id',auth.hasRole('recruiter'), controller.update);
router.delete('/:id',auth.hasRole('recruiter'), controller.destroy);

module.exports = router;