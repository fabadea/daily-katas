// Please do not change the name of this function
const simplifyDirections = directions => {
  const result = []
  const refObj = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    WEST: 'EAST',
    EAST: 'WEST'
  }

  for (let i = 0; i < directions.length; i++) {
    if (directions.includes(refObj[directions[i]])) {
      const index = directions.indexOf(refObj[directions[i]])
      directions.splice(index, 1)
    } else result.push(directions[i])
  }

  return result
}

module.exports = { simplifyDirections }
