'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SearchSchema = new Schema({
	terms: {
		type: Array,
		required: 'Enter the search terms'
	},
	Created_date: {
		type: Date,
		default: Date.now
	},
	database: {
		type: [{
			type: String,
			enum: ['Case Documents', 'Service List', 'Activities', 'Cases Established']
		}],
		default: ['Case Documents']
	}
});

module.exports = mongoose.model('Searches', SearchSchema);
