/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes')
  .del()
  .then(function() {
    // Insert seed entries
    // generate an array of 100 posts using faker
    const notes = Array.from({length: 10}).map(() => {
      return {
        content: faker.lorem.paragraph(),
        created_at: faker.date.past()
      }
    })
    return knex('notes').insert(notes)
  })
}