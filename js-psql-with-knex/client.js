const knex = require("knex")

const developmentsConfig = require("./knexfile").development;

const client = knex(developmentsConfig)

module.exports = client