/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Mindate = require('./mindate.model');

exports.register = function(socket) {
  Mindate.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Mindate.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('mindate:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('mindate:remove', doc);
}