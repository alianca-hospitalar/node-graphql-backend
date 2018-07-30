const graphqlType = require('../../../helpers/graphqlType')

const definitions = `
  type Mutation {
    "Cria/altera um hospital"
    saveHospital(
      "Dados do hospital (id obrigário apenas em caso de atualização)"
      hospital: HospitalInput!
    ): Hospital

    deleteHospital(
      "Identificador do hospital no sistema"
      id: Int!
    ): Boolean
  }
`

module.exports = graphqlType({ definitions })
