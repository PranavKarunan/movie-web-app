const Movie = require('../models/movieSchema');


const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        return res.status(200).json({ message: 'Success', data: movies });
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

const addMovie = async (req, res) => {
    const { title, plot, cast, poster, releaseYear } = req.body;
    try {
        await new Movie(
            {
                title,
                plot,
                cast,
                releaseYear,
                poster
            }
        ).save();
        return res.status(201).json({ message: "success" });
    } catch (error) {
        return res.status(500).json({ message: error.message, data: null });
    }
}

const getMovieById = async (req, res) => {
    try {
        const movies = await Movie.findOne({ _id: req.params.id });
        return res.status(200).json({ message: 'Success', data: movies })
    } catch (error) {
        return res.status(500).json({ message: error.message, data: null });
    }
}

const searchMovie = async (req, res) => {
    try {
        const { name } = req.query;
        const regex = new RegExp(name, 'i');
        const serachedMovies = await Movie.find({ title: regex });
        return res.status(200).json({ message: 'success', data: serachedMovies });
    } catch (error) {
        return res.status(500).json({ message: error.message, data: null });
    }
}

module.exports = { getAllMovies, addMovie, getMovieById, searchMovie };