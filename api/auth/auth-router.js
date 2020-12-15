const bcrypt = require('bcryptjs');
const router = require('express').Router();
const User = require('../users/users-model');
const { isValid } = require('../users/users-service');
const makeToken = require('../middleware/make-token');

router.post('/register', (req, res) => {
    const creds = req.body;

    if (isValid(creds)) {
        const rounds = process.env.BCRYPT_ROUNDS || 10;

        const hash = bcrypt.hashSync(creds.password, rounds);
        creds.password = hash;

        User.add(creds)
            .then((user) => {
                res.status(201).json({ data: user });
            })
            .catch((err) => {
                res.status(500).json({ message: err.message });
            });
    } else {
        res.status(400).json({ message: "Provide a username and alphanumeric password." });
    }
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (isValid(req.body)) {
        User.findBy({ username: username })
        .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = makeToken(user);

                res.status(200).json({
                    message: "Welcome to the API, " + user.username,
                    token
                });
            } else {
                res.status(401).json({ message: "Invalid credentials." });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
    } else {
        res.status(400).json({
            message: "Please provide a valid username and password."
        });
    }
});

module.exports = router;