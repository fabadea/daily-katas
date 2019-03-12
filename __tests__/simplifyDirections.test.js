const { simplifyDirections } = require('../simplifyDirections')

describe('simplifyDirections()', () => {
  it('returns the same array if no directions to simplyfy', () => {
    expect(simplifyDirections(['NORTH', 'EAST'])).toEqual(['NORTH', 'EAST'])
  })
  it('returns an empty array if the directions cancel one another out', () => {
    expect(simplifyDirections(['NORTH', 'EAST'])).toEqual(['NORTH', 'EAST'])
  })
  it('returns an array with simplified directions', () => {
    expect(simplifyDirections(['NORTH', 'SOUTH', 'WEST'])).toEqual(['WEST'])
    expect(
      simplifyDirections(['NORTH', 'WEST', 'SOUTH', 'WEST', 'EAST'])
    ).toEqual(['WEST'])
    expect(
      simplifyDirections(['NORTH', 'EAST', 'SOUTH', 'WEST', 'NORTH', 'NORTH'])
    ).toEqual(['NORTH', 'NORTH'])
  })
})
