const { gql } = require('apollo-server')

const {
  graphqlAstString,
  graphqlAstName,
  graphqlAstNamedType,
  graphqlAstInputObjectType,
  graphqlAstInputValueType
} = require('./graphqlAst')

const fillQueryTypes = require('./fillQueryTypes')

const fillDocumentation = require('./fillDocumentation')

module.exports = function grapqhQLType ({ definitions, entity, queryable = false }) {
  const documentDef = gql(definitions)

  if (entity) {
    fillDocumentation(documentDef, entity)
  }

  if (queryable) {
    fillQueryTypes(documentDef)
  }

  return documentDef
}
