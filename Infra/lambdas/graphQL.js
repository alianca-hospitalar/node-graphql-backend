const { ApolloServer } = require('apollo-server-lambda')

function formatError (error) {
  const lambdaError = Object.assign({}, error, error.originalError)

  console.log(lambdaError)

  return lambdaError
}

const { typeDefs, resolvers } = require('../../Infra/api/graphQL')

const server = new ApolloServer({ typeDefs, resolvers, formatError })

module.exports = server.createHandler()
