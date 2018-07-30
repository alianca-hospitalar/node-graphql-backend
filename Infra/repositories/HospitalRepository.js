const { Repository } = require('speck-sequelize-repository')

const model = require('./models').Hospital
const map = require('./maps/HospitalMapper')

module.exports = Repository.for(model, map, {})
