const graphqlResolverToUseCase = require('../../../helpers/graphqlResolverToUseCase')

module.exports = {
  Query: {
    hospitals: graphqlResolverToUseCase(require('../../../../Domain/UseCases/GetHospitals'))
  },
  Mutation: {
    saveHospital: graphqlResolverToUseCase(require('../../../../Domain/UseCases/SaveHospital')),
    deleteHospital: graphqlResolverToUseCase(require('../../../../Domain/UseCases/DeleteHospital'))
  }
}
