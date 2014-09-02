/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Replie = require('./replie.model');

exports.register = function(socket) {
  Replie.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Replie.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('replie:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('replie:remove', doc);
}