// 1. Find out the environment - is it production or development.
// 2. Go to knexfile and grap the environment config object.
// 3. Export our configuration

environment process.NODE_ENV || 'development'
var config = require('../knexfile.js')[environment]
module.exports = knex(config)
