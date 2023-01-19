const knex = require('./client');

knex("posts")
  .update({title: "new title", content: "new content"})  
  .where("title", "like", "Optional value-added framework")
  .then(data =>{
    console.log(data);
    knex.destroy();
  })