const Movie = require('../models/movieSchema');


export const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        return res.status(200).json({ message: 'Success', data: movies });
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const addMovie = async (req, res) => {
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

export const getMovieById = async (req, res) => {
    try {
        const movies = await Movie.findOne({ _id: req.params });
        return res.status(200).json({ message: 'Success', data: movies })
    } catch (error) {
        return res.status(500).json({ message: error.message, data: null });
    }
}

export const searchMovie = async (req, res) => {
    try {
        const serachKey = req.query.name;
        const serachedMovies = await Movie.find({ $match: { title: serachKey } });
        return res.status(200).json({ message: 'success', data: serachedMovies });
    } catch (error) {
        return res.status(500).json({ message: error.message, data: null });
    }
}