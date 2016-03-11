var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StorySchema = new Schema ({
	headline: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true
	},
	createdate: {
		type: String
	},
	content: {
		type: String
	},
	image: {
		type: String,
	}
});


var Story = mongoose.model('Story', StorySchema);
module.exports = Story;