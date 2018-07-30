const dependencies = {
  GetEntities: require('../../Services/CrudUseCasesLogic/GetEntities')
}

module.exports = function GetHospitals ({ id, queryOptions }, injection) {
  const { GetEntities } = Object.assign({}, dependencies, injection)

  return GetEntities(
    {
      repository: require('../../../Infra/repositories/HospitalRepository'),
      entityType: require('../../Entities/Hospital'),
      entityKey: id,
      queryOptions
    },
    injection
  )
}
