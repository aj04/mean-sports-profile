let mongoose = require('mongoose');

// create a model with validators and schema
let  CommentAsianTaste = mongoose.model('Comment', {
	id: {
		type: Number,
		trim: true
	},
	dishId: {
		type: Number,
		required: true,
		minlength: 1,
		trim: true
	},
	comment: {
		type: String,
		required: true,
		minlength: 3,
		trim: true
	},
	author: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	date: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});


module.exports = { CommentAsianTaste };

