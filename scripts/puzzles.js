let datasheet = require('./data')
let data = datasheet.data
let solution = datasheet.solution

let puzzle = []
let solve = []

function setPuzzle (squares) {
  puzzle = stock1.split('')
  solve = stock1Solve.split('')
  for (let i = 0; i < squares.length; i++) {
    let square = squares[i]
    let para = square.children[0]
    para.textContent = puzzle[i]
  }
}

const stock1 = '.13.....22.....48....7...19...9..8..7......2....3.......263.9..4.9.7.6....149...8'
const stock1Solve = '913584762257169483648723519136942857795816324824357196572638941489271635361495278'

module.exports = {
  setPuzzle,
  puzzle,
  solve
}
