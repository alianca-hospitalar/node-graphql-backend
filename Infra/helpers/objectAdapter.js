const Joi = require('joi')
const { validatorAdapter } = require('speck-entity')
const adapter = validatorAdapter('joi', Joi)

module.exports = function objectAdapter (anObject) {
  return Object.keys(anObject)
    .reduce((accumulator, key) => Object.assign(accumulator, { [key]: adapter(anObject[key]) }), {})
}
