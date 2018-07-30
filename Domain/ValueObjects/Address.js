const { Entity } = require('speck-entity')
const Joi = require('joi')
const objectAdapter = require('../../Infra/helpers/objectAdapter')

const brazilianStates = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará ',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
]

class Address extends Entity { }

Address.SCHEMA = objectAdapter({
  name: Joi.string().required(),
  number: Joi.number().integer(),
  complement: Joi.string(),
  zipCode: Joi.string().regex(/[0-9]+/).length(8).required(),
  city: Joi.string().required(),
  state: Joi.string().allow(brazilianStates).required()
})

Address.TYPE_DOC = 'Representa um endereço brasileiro'

Address.FIELD_DOCS = {
  name: 'Nome, Logradouro do endereço (ex. Rua Cidade Brasileira)',
  number: 'Número do imóvel no logradouro',
  complement: 'Complemento do endereço',
  zipCode: 'Código postal (CEP) do endereço',
  city: 'Cidade onde o endereço está localizado',
  state: 'Estado brasileiro onde o endereço está localizado'
}

module.exports = Address
