'use strict';

var mongoosePaginate = require('mongoose-paginate'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IncidentSchema = new Schema({
	PRIMARYKEY: Number,
	INCI_ID: Number,
	CALL_ID: String,
	ADDRESS_PUBLIC: String,
	DATE_REPT: Date,
	HOUR_REPT: Number,
	DATE_OCCU: Date,
	HOUR_OCCU: Number,
	DATE_FND: Date, 
	HOUR_FND: Number,
	NEIGHBORHD: String,
	AGENCY: String,
	OFFENSE: String,
	STATUSDESC: String,
	CAPRIORITY: Number,
	NATURECODE: String,
	NATURECODEDESC: String,
	HOWRECEIVE: String,
	CSDISPOSIT: String,
	CSDISPDESC: String,
	ACTDATE: Date,
	ACTTIME: Number,
	EMDIVISION: String,
	EMUNIT: String,
	X: Number,
	Y: Number,
	ADDUSER: String,
	APPSTATE: String,
	ADDTIME: Date,
	LOC_METHOD: String,
	ADD_NS: Number,
	ADD_DIR_NS: String,
	ADD_EW: Number,
	ADD_DIR_EW: String,
	NHA_NAME: String
});

IncidentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Incident', IncidentSchema);