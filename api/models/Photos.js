var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhotoSchema = new Schema ({
	owner: {
		type: String,
	},
	title: {
		type: String,
		required: true,
		unique: true
	},
	createdate: {
		type: String,
	},
	location: {
		type: String,
	},
	copyright: {
		type: String,
	},
	description: {
		type: String,
	}
});

var Photo = mongoose.model('Photo', PhotoSchema);
module.exports = Photo;