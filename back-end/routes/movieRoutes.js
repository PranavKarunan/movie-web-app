const express = require('express');
const { addMovie, getAllMovies, getMovieById, searchMovie } = require("../controllers/movieController");

const router = express.Router();

router.post('/new-movie', addMovie);
router.get('/getById/:id', getMovieById);
router.get('/getAllMovies', getAllMovies);
router.get('/search', searchMovie);


module.exports = router;