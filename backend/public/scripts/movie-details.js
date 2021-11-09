const redirectReviewPage =  function() {
    const movieTitle = document.getElementById('movie-title').innerText
    window.location.href = "http://localhost:3000/createreview?title=" + movieTitle;
    return;
};