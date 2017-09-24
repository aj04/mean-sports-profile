let mongoose = require('mongoose');

mongoose.promise = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/SportsProfile', {
    useMongoClient: true,
});

module.exports = {mongoose};