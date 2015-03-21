'use strict';

var express = require('express');
var controller = require('./incident.controller');

var router = express.Router();

router.get('/', controller.interval);
router.get('/:id', controller.show);
router.get('/mindate', controller.minDate);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
