import Knex from 'knex';

// specify create class table
export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        // creating relationship
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            // delete all classes when class is deleted
            .onDelete('CASCADE')
            // update all classes when class is updated
            .onUpdate('CASCADE');
    });
}

// in case something fails
export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}