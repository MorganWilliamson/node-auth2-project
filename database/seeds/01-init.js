exports.seed = function (knex) {
    return knex('users').insert([
        { id: 1, username: "aaaaa", password: "bbbbb", department: "ccccc" }
    ]);
};