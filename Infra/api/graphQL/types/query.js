const graphqlType = require('../../../helpers/graphqlType')

const definitions = `
  type Query {
    "Retorna uma lista de hospitais"
    hospitals(
      "Identificador do hospital no sistema (filtro opcional)"
      id: Int,
      "Opções de configuração da query"
      queryOptions: HospitalQueryOptions
    ): [Hospital]
  }
`

module.exports = graphqlType({ definitions })
