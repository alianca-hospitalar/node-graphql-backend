const graphqlType = require('../../../../helpers/graphqlType')

const entity = require('../../../../../Domain/ValueObjects/Address')

const definitions = `
  type Address {
    name: String
    number: Int
    complement: String
    zipCode: String
    city: String
    state: String
  }

  input AddressInput {
    name: String!
    number: Int
    complement: String
    zipCode: String!
    city: String!
    state: String!
  }
`

module.exports = graphqlType({ definitions, entity })
