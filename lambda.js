// This file only exposes the handlers to the AWS Lambda API
const initDatabase = require('./Infra/initDatabase')

initDatabase()

exports.graphql = require('./Infra/lambdas/graphQL')
