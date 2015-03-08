'use strict';

var _ = require('lodash');
var Incident = require('../incident/incident.model');

// Get list of mindates
exports.index = function(req, res) {
  Incident.find()
  .limit(1)
  .sort([['DATE_REPT', 'ascending']])
  .exec(function(err,minDate) {
    return res.json(200, minDate);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}