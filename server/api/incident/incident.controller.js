'use strict';

var _ = require('lodash');
var paginate = require('express-paginate');
var Incident = require('./incident.model');

// Get list of incidents
exports.index = function(req, res, next) {
  Incident.paginate({}, req.query.page, req.query.limit, function(err, pageCount, incidents, itemCount) {

    if (err) return next(err);

    console.log(req.query.all);

    var resArray = [];

    for(var x = 0; x < incidents.length; x++) {
      var incident = {};
      incident.LONGITUDE = incidents[x].LONGITUDE;
      incident.LATITUDE = incidents[x].LATITUDE;
      incident.CSDISPDESC = incidents[x].CSDISPDESC;
      resArray.push(incident);
    }

    res.format({
      json: function() {
        res.json({
          object: 'list',
          has_more: paginate.hasNextPages(req)(pageCount),
          data: req.query.all ? incidents : resArray
        });
      }
    });
  });
};
exports.interval = function(req, res){
  var lim = req.query.lim;
  console.log(req.query.lim);
  if(!req.query.lim){
    lim = req.query.lim;
  }
  Incident.find( {"DATE_OCCU": {"$gte": new Date(req.query.start), "$lte": new Date(req.query.end)}})
  .limit(lim)
  .exec(function(err, incident){
    if(err) { return handleError(res, err);}
    if(!incident) {return res.send(404); }
    return res.json(incident);
  });
};
// Get a single incident
exports.show = function(req, res) {
  Incident.findById(req.params.id, function (err, incident) {
    if(err) { return handleError(res, err); }
    if(!incident) { return res.send(404); }
    return res.json(incident);
  });
};

// Creates a new incident in the DB.
exports.create = function(req, res) {
  Incident.create(req.body, function(err, incident) {
    if(err) { return handleError(res, err); }
    return res.json(201, incident);
  });
};

// Updates an existing incident in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Incident.findById(req.params.id, function (err, incident) {
    if (err) { return handleError(res, err); }
    if(!incident) { return res.send(404); }
    var updated = _.merge(incident, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, incident);
    });
  });
};

// Deletes a incident from the DB.
exports.destroy = function(req, res) {
  Incident.findById(req.params.id, function (err, incident) {
    if(err) { return handleError(res, err); }
    if(!incident) { return res.send(404); }
    incident.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}