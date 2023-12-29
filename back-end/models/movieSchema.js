const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const movieSchema = Schema({
    title: {
        type: String,
        required: [true, 'Name of movie should specified']
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

export const Movies = mongoose.model('Movies', movieSchema);