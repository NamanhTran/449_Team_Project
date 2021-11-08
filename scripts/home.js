window.onload = async function(event) {
    const SERVER_URL = "http://localhost:3000";
    const { data } = await axios.get(SERVER_URL + '/trending');

    console.log(data);
    event.preventDefault();
};