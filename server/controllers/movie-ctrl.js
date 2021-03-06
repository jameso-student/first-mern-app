const Movie = require('../models/movie-model');

createMovie = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        });
    }

    const movie = new Movie(body);

    if (!movie) {
        return res.status(400).json({ success: false, error: err });
    }

    movie
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Movie created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Movie not created!',
            })
        })
}

updateMovie = async (req, res) => {
    const body = req.body
    
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Movie.findOne({_id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status.json(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        movie.name = body.name;
        movie.time = body.time;
        movie.rating = body.rating;
        
        movie
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Movie updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Movie not updated!',
                })
            })
    })
}

deleteMovie = async (req, res) => {
    Movie.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ 
                success: false,
                error: err,
            })
        }

        if(!movie) {
            return res.status(404).json({
                success: false,
                error: 'Movie not found!',
            })
        }
        return res.status(200).json({
            success: true,
            data: movie,
        })
    })
}

getMovieById = async (req, res) => {
    Movie.findById({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err,
            })
        }
        
        if (!movie) {
            return res.status(404).json({
                success: false,
                error: 'Movie not found!',
            })
        }
        return res.status(200).json({
            success: true,
            data: movie,
        })
    })
}

getMovies = async (req, res) => {
    Movie.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err,
            })
        }
        
        if (!movies.length) {
            return res.status(404).json({
                success: false,
                error: 'No movies found!',
            })
        }
        return res.status(200).json({
            success: true,
            data: movies,
        })
    })
}

module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    getMovies,
    getMovieById,
}