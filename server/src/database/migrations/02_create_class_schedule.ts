import Knex from 'knex';

// specify create class_schedule table
export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        // creating relationship
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            // delete all class_schedule when class is deleted
            .onDelete('CASCADE')
            // update all class_schedule when class is updated
            .onUpdate('CASCADE');
    });
}

// in case something fails
export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
}