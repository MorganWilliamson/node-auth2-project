const router = require('express').Router();
const User = require('./users-model');
const restricted = require('../middleware/restricted');

router.get('/', restricted, (req, res) => {
    User.find()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => res.send(err));
});

module.exports = router;
