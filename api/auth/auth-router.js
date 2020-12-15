const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = require('express').Router();

const User = require('../users/users-model');
const { isValid } = require('../users/users-service');

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

