import Knex from 'knex';

// specify create user table
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

// in case something fails
export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}