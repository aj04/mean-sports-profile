let mongoose = require('mongoose');

// create a model with validators and schema
let  SportProfile = mongoose.model('Profile', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    sports: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    gender: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    dob: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    location: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    favTeam: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    charity: {
        type: String,
        trim: true
    },
    interests: {
        type: String
    },
    facebook: {
        type: String,
        trim: true
    },
    twitter: {
        type: String,
        trim: true
    },
    instagram: {
        type: String,
        trim: true
    }
});


module.exports = {SportProfile};

