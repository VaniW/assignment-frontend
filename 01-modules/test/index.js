import should from 'should'
import {
  valid,
  degreeProgram,
  level,
  graduationYear
} from '../src/module'

describe('01-modules', () => {
  describe('#valid()', () => {
    it('should be a valid FH/MMT email', () => {
      valid('hmoser.mmt-b2015@fh-salzburg.ac.at').should.be.true()
    })
    it('should be an invalid FH/MMT email', () => {
      valid('hannes.moser@fh-salzburg.ac.at').should.be.false()
    })
    it('should be an invalid FH/MMT email', () => {
      valid('hmosermmt-b2015@fh-salzburg.ac.at').should.be.false()
    })
    it('should be an invalid FH/MMT email', () => {
      valid('hmoser.mm-b2015@fh-salzburg.ac.at').should.be.false()
    })
    it('should be an invalid FH/MMT email', () => {
      valid('hmoser.mmt-b20a5@fh-salzburg.ac.at').should.be.false()
    })
    it('should be an invalid FH/MMT email', () => {
      valid('hmoser.mmt-b2015@fh-salzburg.acat').should.be.false()
    })
  })

  describe('#degreeProgram()', () => {
    it('should match MMT', () => {
      degreeProgram('hmoser.mmt-b2015@fh-salzburg.ac.at').should.eql('MMT')
    })
    it('should match MMA', () => {
      degreeProgram('hmoser.mma-b2015@fh-salzburg.ac.at').should.eql('MMA')
    })
    it('should match ITSB', () => {
      degreeProgram('hmoser.itsb-b2015@fh-salzburg.ac.at').should.eql('ITSB')
    })
    it('should be a invalid FH/MMT email', () => {
      degreeProgram('hmosermmt-b2015@fh-salzburg.ac.at').should.be.false()
    })
  })

  describe('#level()', () => {
    it('should match BA or MA', () => {
      level('hmoser.mmt-b2015@fh-salzburg.ac.at').should.eql('BA')
    })
    it('should match BA or MA', () => {
      level('hmoser.mmt-m2015@fh-salzburg.ac.at').should.eql('MA')
    })
    it('should be a invalid FH/MMT email', () => {
      level('hmosermmt-b2015@fh-salzburg.ac.at').should.be.false()
    })
  })

  describe('#graduationYear()', () => {
    it('should be your graduation year', () => {
      graduationYear('hmoser.mmt-b2015@fh-salzburg.ac.at').should.eql(2018)
    })
    it('should be your graduation year', () => {
      graduationYear('hmoser.mmt-m2015@fh-salzburg.ac.at').should.eql(2017)
    })
    it('should be a invalid FH/MMT email', () => {
      graduationYear('hmosermmt-b2015@fh-salzburg.ac.at').should.be.false()
    })
  })
})
