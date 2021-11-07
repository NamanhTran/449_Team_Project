const { checkUsernameOrEmailExists, getUser, createUser } = require('./userController');

exports.postLogIn = async (req, res, next) => {
    // Check if username and password fields exists
    const {username, password} = req.body;

    // Check if username and password are correct
    try {
        const user = await getUser(username);

        if (user.password != password) {
            return res.status(401);
        }
    } catch (error) {
        return res.status(500).json({'error': 'database error in getting user'});
    }

    return res.send(200);
};

exports.postSignUp = async (req, res, next) => {
    // Check if username, password, and email exists
    const { username, password, email } = req.body;

    // Check if username or email is in use
    if (await checkUsernameOrEmailExists(username, email)) {
        return res.status(400).json({'error': 'username/email already exists'});
    }

    // If does not exists then create account
    await createUser(username, email, password);

    console.log("here");

    return res.send(200);
};