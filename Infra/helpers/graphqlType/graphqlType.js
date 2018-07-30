const { gql } = require('apollo-server')

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
