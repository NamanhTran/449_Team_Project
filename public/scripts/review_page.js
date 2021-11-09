const createreview = async function() {
    const username = document.getElementById('username-input').value;
    const movieTitle = document.getElementById('movie-title').innerText;
    const review = document.getElementById('review').value;
    const rating = userRating;

    if (!username || !review || !rating) {
        document.getElementById('review-error').innerText = "Please Fill All Fields";
        return;
    } 

    console.log('username:', username,'\nmovieTitle:', movieTitle,'\nreview:', review, '\nuserRating:', userRating);

    try {
        const result = await axios.post(SERVER_URL + '/createreview', {'username': username, 'movieTitle': movieTitle, 'review': review, 'rating': rating});
        console.log(result);
        if (result.status == 200) { 
            window.location.href = SERVER_URL + "/movieDetails?title=" + movieTitle;
            return;
        }

    } catch (error) {
        console.log(error);
        if (error.response.status == 401) {
            return;
        }

        else {
            return;
        }
    }
};





