const { Entity } = require('speck-entity')
const Joi = require('joi')
const objectAdapter = require('../../Infra/helpers/objectAdapter')

const Address = require('../ValueObjects/Address')

function sanitizeData (data) {
  if (!data.location || data.location instanceof Address) return data

  return Object.assign(
    data,
    { location: new Address(data.location) }
  )
}

class Hospital extends Entity {
  constructor (data) {
    const sanitizedData = sanitizeData(data)

    super(sanitizedData)
  }
}

Hospital.SCHEMA = objectAdapter({
  id: Joi.number().integer(),
  name: Joi.string().required(),
  location: Joi.object().type(Address).required(),
  createdAt: Joi.date().timestamp(),
  updatedAt: Joi.date().timestamp()
})

Hospital.TYPE_DOC = 'Hospital gerenciado pelo sistema'

Hospital.FIELD_DOCS = {
  id: 'Identificador do hospital no sistema',
  name: 'Nome do hospital',
  location: 'Localização do hospital',
  createdAt: 'Timestamp da data de criação do hospital no sistema',
  updatedAt: 'Timestamp da data de última atualização do hospital no sistema'
}

module.exports = Hospital
