const { Mapper } = require('speck-sequelize-repository')

const map = {
  toEntity: {
    'id': 'id',
    'name': 'name',
    'location': {
      key: 'location',
      transform: value => JSON.parse(value)
    },
    'createdAt': 'createdAt',
    'updatedAt': 'updatedAt'
  },
  toDatabase: {
    'id': 'id',
    'name': 'name',
    'location': {
      key: 'location',
      transform: value => JSON.stringify(value)
    },
    'createdAt': 'createdAt',
    'updatedAt': 'updatedAt'
  }
}

module.exports = new Mapper(Object, map)
