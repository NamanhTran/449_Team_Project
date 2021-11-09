let curIndexUpcomingMovies = 0;
let curIndexTrendingMovies = 0;
let curIndexNewMovies = 0;
let trendingMovieData = upcomingMovieData = latestMovieData = null;

window.onload = async function() {

    trendingMovieData = (await axios.get(SERVER_URL + '/trending')).data;

    upcomingMovieData = (await axios.get(SERVER_URL + '/upcoming')).data;

    latestMovieData = (await axios.get(SERVER_URL + '/latest')).data;

    console.log(trendingMovieData, latestMovieData, upcomingMovieData);

    document.getElementById('trending-poster').src = 'https://image.tmdb.org/t/p/w300/' + trendingMovieData[curIndexTrendingMovies].poster_path;
    document.getElementById('trending-poster').dataset.title = trendingMovieData[curIndexTrendingMovies].title;

    document.getElementById('new-poster').src = 'https://image.tmdb.org/t/p/w300/' + latestMovieData[curIndexNewMovies].poster_path;
    document.getElementById('new-poster').dataset.title = latestMovieData[curIndexNewMovies].title;

    document.getElementById('upcoming-poster').src = 'https://image.tmdb.org/t/p/w300/' + upcomingMovieData[curIndexUpcomingMovies].poster_path;
    document.getElementById('upcoming-poster').dataset.title = upcomingMovieData[curIndexUpcomingMovies].title;

    return;
};

const trendingLeft = function() {
    if (curIndexTrendingMovies == 0) {
        curIndexTrendingMovies = trendingMovieData.length - 1;
    } else {
        curIndexTrendingMovies--;
    }

    document.getElementById('trending-poster').src = 'https://image.tmdb.org/t/p/w300/' + trendingMovieData[curIndexTrendingMovies].poster_path;
    document.getElementById('trending-poster').dataset.title = trendingMovieData[curIndexTrendingMovies].title;
    console.log('trending left');
    return;
};

const trendingRight = function() {
    if (curIndexTrendingMovies == trendingMovieData.length - 1) {
        curIndexTrendingMovies = 0;
    } else {
        curIndexTrendingMovies++;
    }

    document.getElementById('trending-poster').src = 'https://image.tmdb.org/t/p/w300/' + trendingMovieData[curIndexTrendingMovies].poster_path;
    document.getElementById('trending-poster').dataset.title = trendingMovieData[curIndexTrendingMovies].title;
    console.log('trending right');
    return;
};

const newLeft = function() {
    if (curIndexNewMovies == 0) {
        curIndexNewMovies = latestMovieData.length - 1;
    } else {
        curIndexNewMovies--;
    }

    document.getElementById('new-poster').src = 'https://image.tmdb.org/t/p/w300/' + latestMovieData[curIndexNewMovies].poster_path;
    document.getElementById('new-poster').dataset.title = latestMovieData[curIndexNewMovies].title;
    console.log('new left');
    return;
};

const newRight = function() {
    if (curIndexNewMovies == latestMovieData.length - 1) {
        curIndexNewMovies = 0;
    } else {
        curIndexNewMovies++;
    }

    document.getElementById('new-poster').src = 'https://image.tmdb.org/t/p/w300/' + latestMovieData[curIndexNewMovies].poster_path;
    document.getElementById('new-poster').dataset.title = latestMovieData[curIndexNewMovies].title;
    console.log('new right');
    return;
};

const upcomingLeft = function() {
    do {
        if (curIndexUpcomingMovies == 0) {
            curIndexUpcomingMovies = upcomingMovieData.length - 1;
        } else {
            curIndexUpcomingMovies--;
        }
    } while (upcomingMovieData[curIndexUpcomingMovies].poster_path == null)
    
    document.getElementById('upcoming-poster').src = 'https://image.tmdb.org/t/p/w300/' + upcomingMovieData[curIndexUpcomingMovies].poster_path;
    document.getElementById('upcoming-poster').dataset.title = upcomingMovieData[curIndexUpcomingMovies].title;
    console.log('upcoming left');
    return;
};

const upcomingRight = function() {
    do {
        if (curIndexUpcomingMovies ==  upcomingMovieData.length - 1) {
            curIndexUpcomingMovies = 0;
        } else {
            curIndexUpcomingMovies++;
        }
    } while (upcomingMovieData[curIndexUpcomingMovies].poster_path == null)
    
    document.getElementById('upcoming-poster').src = 'https://image.tmdb.org/t/p/w300/' + upcomingMovieData[curIndexUpcomingMovies].poster_path;
    document.getElementById('upcoming-poster').dataset.title = upcomingMovieData[curIndexUpcomingMovies].title;
    console.log('upcoming right');
    return;
};

const redirectMovieDetails = function(event) {
    const movieTitle = event.target.dataset.title;
    window.location.href = "http://localhost:3000/movieDetails?title=" + movieTitle;
    return;
}