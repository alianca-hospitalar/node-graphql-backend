const { ApolloServer } = require('apollo-server')

const initDatabase = require('./Infra/api/init/database')

initDatabase()
  .then(_ => {
    const { typeDefs, resolvers } = require('./Infra/api/graphQL')

    const server = new ApolloServer({
      typeDefs,
      resolvers
    })

    server.listen()
      .then(({ url }) => console.log(`API running on ${url} ...`))
  })
