'use strict';

var mongoosePaginate = require('mongoose-paginate'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    fs = require('fs');

var header = require('../../../setup/header');
var IncidentSchema = new Schema(header);

IncidentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Incident', IncidentSchema);
