const signup = async function () {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
        document.getElementById('sign-up-error').innerText = "Enter all required fields pleaase."
        return;
    }

    try {
        const response = await axios.post('http://localhost:3000/signup', {'username': username, 'email': email, 'password': password});

        if (response.status == 200) {
            // Set cookie then send back to main page
            window.location.href = "http://localhost:3000/";
            return;
        }
    } catch (error) {
        if (error.response.status == 400) {
            // Show error
            document.getElementById('sign-up-error').innerText = "Username or Email is already in use!";
            return;
        }

        else {
            // Show server error
            document.getElementById('sign-up-error').innerText = "Server Error: Please try again later!";
            return;
        }
    }
}