'use strict';

var _ = require('lodash');
var Replie = require('./replie.model');

// Get list of replies
exports.index = function(req, res) {
  Replie.find(function (err, replies) {
    if(err) { return handleError(res, err); }
    return res.json(200, replies);
  });
};

// Get a single replie
exports.show = function(req, res) {
  Replie.findById(req.params.id, function (err, replie) {
    if(err) { return handleError(res, err); }
    if(!replie) { return res.send(404); }
    return res.json(replie);
  });
};

// Creates a new replie in the DB.
exports.create = function(req, res) {
  Replie.create(req.body, function(err, replie) {
    if(err) { return handleError(res, err); }
    return res.json(201, replie);
  });
};

// Updates an existing replie in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Replie.findById(req.params.id, function (err, replie) {
    if (err) { return handleError(res, err); }
    if(!replie) { return res.send(404); }
    var updated = _.merge(replie, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, replie);
    });
  });
};

// Deletes a replie from the DB.
exports.destroy = function(req, res) {
  Replie.findById(req.params.id, function (err, replie) {
    if(err) { return handleError(res, err); }
    if(!replie) { return res.send(404); }
    replie.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}