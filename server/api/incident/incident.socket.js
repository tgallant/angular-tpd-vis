/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Incident = require('./incident.model');

exports.register = function(socket) {
  Incident.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Incident.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('incident:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('incident:remove', doc);
}
