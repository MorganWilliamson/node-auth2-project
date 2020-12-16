const db = require('../../database/connection');

module.exports = {
    add,
    find, 
    findBy,
    findById,
};

function find() {
    return db('users');
}

function findBy(filter) {
    return db('users').where(filter);
}

function findById(id) {
    return db('users').where('users.id', id).first();
}

async function add(user) {
    const [id] = await db('users').insert(user, 'id');
    return findById(id);
}