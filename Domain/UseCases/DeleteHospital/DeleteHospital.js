const dependencies = {
  DeleteEntity: require('../../Services/CrudUseCasesLogic/DeleteEntity')
}

module.exports = function DeleteHospital ({ id }, injection) {
  const { DeleteEntity } = Object.assign({}, dependencies, injection)

  return DeleteEntity(
    {
      repository: require('../../../Infra/repositories/HospitalRepository'),
      entityType: require('../../Entities/Hospital'),
      entityData: { id }
    },
    injection
  )
}
