'use strict'

let movieData = null;
let movieDataIndex = 0;
let currentPage = 0;
let maxPage = 0;
let delayTimer;

const search = async function () {
    clearTimeout(delayTimer);
    delayTimer = await setTimeout(async function () {
        const query = document.getElementById('search-input').value;
        console.log(query);
        if (query === "") {
            movieData = null;
            movieDataIndex = 0;
            currentPage = 0;
            maxPage = 0;
            const parentElem = document.getElementById('result-container');
            removeAllChildNodes(parentElem);
            updatePageDOM('reset');
            return;
        }
        const { data } = await axios.post(SERVER_URL + '/search', {'query': query});
        
        console.log(data);

        movieData = data;

        updateMovieSearchDOM('init');
    },1000);
};

const updateMovieSearchDOM = function (direction) {
    if (direction === 'left' && currentPage === 1) {
        return;
    }

    if (direction === 'right' && currentPage === maxPage) {
        return;
    }
    let cur = 1;
    const parentElem = document.getElementById('result-container');
    removeAllChildNodes(parentElem);

    if (direction === 'init') {
        movieDataIndex = 0;
        const indexStart = movieDataIndex;

        for (movieDataIndex; movieDataIndex < indexStart + 4; movieDataIndex++) {
            if (movieDataIndex >= movieData.length || !movieData[movieDataIndex].poster_path) {
                continue;
            }

            const newDiv = createNewMovieDivImage(cur, movieData[movieDataIndex].title, movieData[movieDataIndex].poster_path);
            parentElem.appendChild(newDiv);
            cur++;
        }
        updatePageDOM('init');
    }

    else if (direction === 'left') {
        const intialIndex = movieDataIndex;
        movieDataIndex -= 8;
        const indexStart = movieDataIndex;

        for (movieDataIndex; movieDataIndex < indexStart + 4; movieDataIndex++) {
            if (movieDataIndex < 0) {
                movieDataIndex = intialIndex;
                break;
            }

            if (!movieData[movieDataIndex].poster_path) {
                continue;
            }

            const newDiv = createNewMovieDivImage(cur, movieData[movieDataIndex].title, movieData[movieDataIndex].poster_path);
            parentElem.appendChild(newDiv);
            cur++;
        }

        updatePageDOM('left');
    }

    else if (direction === 'right') {
        const indexStart = movieDataIndex;

        for (movieDataIndex; movieDataIndex < indexStart + 4; movieDataIndex++) {
            if (movieDataIndex >= movieData.length || !movieData[movieDataIndex].poster_path) {
                continue;
            }

            const newDiv = createNewMovieDivImage(cur, movieData[movieDataIndex].title, movieData[movieDataIndex].poster_path);
            parentElem.appendChild(newDiv);
            cur++;
        }

        updatePageDOM('right');
    }

    console.log(movieDataIndex);
};

const redirectMovieDetails =  function(event) {
    const movieTitle = event.target.dataset.title;
    window.location.href = SERVER_URL + "/movieDetails?title=" + movieTitle;
    return;
};

const createNewMovieDivImage = function (posterNumber, movieTitle, posterPath) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'result-items');

    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + posterPath);
    newImage.setAttribute('data-title', movieTitle);
    newImage.setAttribute('class', 'movie-poster');
    newImage.setAttribute('id', "poster" + posterNumber);
    newImage.setAttribute('onclick', 'redirectMovieDetails(event)');

    newDiv.appendChild(newImage);

    return newDiv;
}

// Code from https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/ 
const removeAllChildNodes = function (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

const calculateMaxPages = function () {
    length = movieData.length;
    return Math.ceil(length / 4);
};

const updatePageDOM = function (condition) {
    if (condition == 'init') {
        currentPage = 1;
        maxPage = calculateMaxPages();
    }

    else if (condition == 'left') {
        if (currentPage == 0) {
            return;
        }
        currentPage -= 1;
    }

    else if (condition == 'right') {
        if (currentPage == maxPage) {
            return;
        }
        currentPage += 1;
    }

    else if (condition == 'reset') {
        const currentPageNode = document.getElementById('page-info');
        currentPageNode.innerText = "";
        return;
    }
    const currentPageNode = document.getElementById('page-info');
    currentPageNode.innerText = "Page " + String(currentPage) + " of " + String(maxPage);
}