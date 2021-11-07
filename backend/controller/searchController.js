const axios = require('axios');
const config = require('config');

const TheMovieDBInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: config.get('THEMOVIEDB_API_KEY')
    }
});

// Searches movies in the TheMovieDB API given the query 
const searchMovie = async (query) => {
    if (query === '' || typeof query !== 'string') {
        throw new Error('Invalid string provided');
    }

    const response = await TheMovieDBInstance('/search/movie', {
        params: {
            language: 'en-US',
            query: query,
            include_adult: 'false'
        }
    });

    return response;
}

exports.postSearch = async (req, res, next) => {
    // Check if query fields exists
    const { query } = req.body;

    // Query the movieDB API for results
    try {
        const { data } = await searchMovie(query);
        return res.status(200).send(data.results);

    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Error in querying MovieDB"});
    }
}