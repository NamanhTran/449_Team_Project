const SERVER_URL = "http://localhost:3000";

const redirectReviewPage =  function() {
    const movieTitle = document.getElementById('movie-title').innerText
    window.location.href = SERVER_URL + "/createreview?title=" + movieTitle;
    return;
};