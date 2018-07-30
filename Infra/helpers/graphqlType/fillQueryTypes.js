const {
  graphqlAstNamedType,
  graphqlAstInputObjectType,
  graphqlAstInputValueType
} = require('./graphqlAst')

function convertFieldDefinitionToInputTypeDefinition (field, typeMap) {
  const mappedType = typeMap[field.name.value]
  const fieldType = mappedType ? graphqlAstNamedType(mappedType) : field.type

  return graphqlAstInputValueType(field.name.value, fieldType.name.value, field.description.value)
}

function getInputFieldTypes (inputType) {
  return inputType.fields.reduce(
    (accumulator, field) => {
      const fieldTypeNameDefinition = (field.type.name || field.type.type.name)

      return Object.assign(accumulator, { [field.name.value]: fieldTypeNameDefinition.value })
    },
    {}
  )
}

function fillQueryTypes (documentDef) {
  const [ mainType, inputType ] = documentDef.definitions

  const typeMap = getInputFieldTypes(inputType)

  const queryFilterOptionsType = graphqlAstInputObjectType(
    `${mainType.name.value}QueryFilterOptions`,
    'Objeto com o nome dos atributos e os valores a serem filtrados',
    mainType.fields.map(field => convertFieldDefinitionToInputTypeDefinition(field, typeMap))
  )

  const queryOptions = graphqlAstInputObjectType(
    `${mainType.name.value}QueryOptions`,
    'Opções de execução de uma query no sistema',
    [
      graphqlAstInputValueType(
        'first', 'Int',
        'Indica quantos registros serão recuperados na query\nCaso este valor seja omitido, a query retornará todos os dados obtidos'
      ),
      graphqlAstInputValueType(
        'filter', `${mainType.name.value}QueryFilterOptions`,
        'Objeto com o nome dos atributos e os valores a serem filtrados'
      )
    ]
  )

  documentDef.definitions = [ mainType, inputType, queryFilterOptionsType, queryOptions ]
}

module.exports = fillQueryTypes
