const { expect } = require('chai')

const Hospital = require('./Hospital')
const Address = require('../ValueObjects/Address')

describe('Hospital', () => {
  describe('#constructor', () => {
    it('skip sanitize process when a location is missing', () => {
      const hospital = new Hospital({})

      expect(hospital.location).to.be.undefined()
    })

    it('skip sanitize process when a location is sent typed', () => {
      const hospital = new Hospital({
        location: new Address()
      })

      expect(hospital.location).to.be.instanceOf(Address)
    })

    it('sanitize data when a location is sent without type', () => {
      const hospital = new Hospital({
        location: {}
      })

      expect(hospital.location).to.be.instanceOf(Address)
    })
  })
})
