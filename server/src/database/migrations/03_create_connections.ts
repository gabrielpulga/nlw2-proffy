import Knex from 'knex';

// specify create connection table
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {

        // creating relationship
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

            table.timestamp('created_at')
                .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
                .notNullable();
    });
}

// in case something fails
export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}