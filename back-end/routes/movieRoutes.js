import express from "express";
import { addMovie, getAllMovies, getMovieById, searchMovie } from "../controllers/movieController";

const router = express.Router();

router.post('/new-movie', addMovie);
router.get('/getById/:id', getMovieById);
router.get('/getAllMovies', getAllMovies);
router.get('/serach?name=title', searchMovie);


module.exports = router;