const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Remove parentheses here

const movieSchema = Schema({
    title: {
        type: String,
        required: [true, 'Name of the movie should be specified']
    },
    releaseYear: {
        type: Date,
        required: [true, 'Release year is required']
    },
    plot: {
        type: String,
        // required: [true, '']
    },
    poster: {
        type: String
    },
    cast: {
        type: String
    }
});

module.exports = mongoose.model('Movies', movieSchema);
