const graphqlType = require('../../../../helpers/graphqlType')

const entity = require('../../../../../Domain/Entities/Hospital')

const definitions = `
  type Hospital {
    id: Int
    name: String
    location: Address
    createdAt: Int
    updatedAt: Int
  }

  input HospitalInput {
    id: Int
    name: String!
    location: AddressInput!
  }
`

module.exports = graphqlType({ definitions, entity, queryable: true })
