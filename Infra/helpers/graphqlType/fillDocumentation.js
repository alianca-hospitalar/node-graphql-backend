const {
  graphqlAstString
} = require('./graphqlAst')

function fillDescription (typeDef, description) {
  if (typeDef.description) return

  typeDef.description = graphqlAstString(description)
}

function fillDocumentationToType (typeDef, entity) {
  fillDescription(typeDef, entity.TYPE_DOC)

  typeDef.fields.forEach(fieldDef => fillDescription(fieldDef, entity.FIELD_DOCS[fieldDef.name.value]))
}

function fillDocumentation (documentDef, entity) {
  const [ mainType, inputType ] = documentDef.definitions

  fillDocumentationToType(mainType, entity)
  fillDocumentationToType(inputType, entity)
}

module.exports = fillDocumentation
