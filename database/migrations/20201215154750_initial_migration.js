
exports.up = function(knex) {
    return knex.schema
        .createTable("roles", tbl => {
            tbl.increments();
            tbl.string("name", 128).notNullable().unique();
        })
        .createTable("users", tbl => {
            tbl.increments();
            tbl.string("username", 128).notNullable().unique().index();
            tbl.string("passwords", 256).notNullable();
            tbl.integer("role").unsigned()
                .references("roles.id")
                .onDelete("restrict").onUpdate("cascade")
                .defaultTo(2);
        });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("roles");
};
