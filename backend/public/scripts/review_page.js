const createreview = async function() {
    const username = document.getElementById('username-input').value;
    const movieTitle = document.getElementById('movie-title').innerText;
    const review = document.getElementById('review').value;
    const rating = userRating;

    console.log('username:', username,'\nmovieTitle:', movieTitle,'\nreview:', review, '\nuserRating:', userRating);

    try {
        const result = await axios.post('http://localhost:3000/createreview', {'username': username, 'movieTitle': movieTitle, 'review': review, 'rating': rating});
        console.log(result);
        if (result.status == 200) {
            // Set cookie then send back to main page
            window.location.href = "http://localhost:3000/";
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





