/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('notes', table => {
      table.increments('id'); 
      table.text('content');
      table.timestamp('created_at').defaultTo(knex.fn.now()); // created_at timestamp is defaulted to the time of now, now being when the function is triggered
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('notes')
  };