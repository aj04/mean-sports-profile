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

/**
 * {
  "name": "Ajay Dubey",
  "sport": [
    {
      "sportName": "soccer"
    },
    {
      "sportName": "baseball"
    },
    {
      "sportName": "baseball1"
    }
  ],
  "gender": {
    "genderName": "Male"
  },
  "nationality": "Indian",
  "dob": "2017-09-05",
  "location": "Boston, MA",
  "favTeam": "NBC",
  "charity": "Yoga",
  "interests": "I love running",
  "facebook": "ajay.dubey9",
  "twitter": "ajay_dubey",
  "Instagram": "ajay_dubey"
}
 */

/**
 * Summary
 Name: Ajay Dubey
 Sport: soccer, baseball, baseball1
 Gender: Male
 Nationality: Indian
 Date of Birth: 2017-09-05
 Location: Boston, MA
 Favourite Teams: NBC
 Charities: Yoga
 Interests: I love running
 Facebook: ajay.dubey9
 Twitter: ajay_dubey
 Instagram:
 */