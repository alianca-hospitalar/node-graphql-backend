const dependencies = {
  SaveEntity: require('../../Services/CrudUseCasesLogic/SaveEntity')
}

module.exports = function SaveHospital ({ hospital: entity }, injection) {
  const { SaveEntity } = Object.assign({}, dependencies, injection)

  return SaveEntity(
    {
      repository: require('../../../Infra/repositories/HospitalRepository'),
      entityType: require('../../Entities/Hospital'),
      entityData: entity
    },
    injection
  )
}
