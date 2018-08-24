let data = require('./data')

let puzzle = []
let puzzleLS = JSON.parse(localStorage.getItem('puzzle'))
let solve = []

const stock1 = {
  puzz: '.13.....22.....48....7...19...9..8..7......2....3.......263.9..4.9.7.6....149...8',
  solve: '913584762257169483648723519136942857795816324824357196572638941489271635361495278',
  diff: 'Easy'
}

const stock2 = {
  puzz: '5...7.6..41..53..7.6712...884.....1.....1.3.6...7...2........65......87..3.......',
  solve: '529478631418653297367129458846532719275914386193786524982347165654291873731865942',
  diff: 'Simple'
}

const stock3 = {
  puzz: '...6..4.9..8........3..9.....17.5...8.......1.4.3......3.....561......3..94..8..7',
  solve: '512673489978142563463859712321795648859426371746381295237914856185267934694538127',
  diff: 'Intermediate'
}

const stock4 = {
  puzz: '.46...58.718.....65...4....1....675..8.....1..2...58.4.....74...69....7.2....1...',
  solve: '946712583718359246532648197193486752485273619627195834351967428869524371274831965',
  diff: 'Easy'
}

const stock5 = {
  puzz: '6.......1...63.....8241...9.....5.1..4.......2.9..8..5..4....8.....2.46.5........',
  solve: '697852341451639278382417659873265914145973826269148735714396582938521467526784193',
  diff: 'Easy'
}

const stock6 = {
  puzz:'........49.1.6.5....8....9.8..4.37.6....1....54...718.....39..7....4..5....7..81.',
  solve: '756981234921364578438572691819453726673218945542697183285139467197846352364725819',
  diff: 'Expert'
}

const chooser = [stock1, stock2, stock3, stock4, stock5, stock6]

function setPuzzle (squares) {
  let chosen = chooser[Math.floor(Math.random() * 5)]
  puzzle = chosen.puzz.split('')
  solve = chosen.solve.split('')

  data.A = puzzle.slice(0, 9)
  data.B = puzzle.slice(9, 18)
  data.C = puzzle.slice(18, 27)
  data.D = puzzle.slice(27, 36)
  data.E = puzzle.slice(36, 45)
  data.F = puzzle.slice(45, 54)
  data.G = puzzle.slice(54, 63)
  data.H = puzzle.slice(63, 72)
  data.I = puzzle.slice(72, 81)
  localStorage.setItem('data', JSON.stringify(data))
  localStorage.setItem('puzzle', JSON.stringify({puzzle, solve}))
}

function resetPuzzle (squares) {
  const dataLS = JSON.parse(localStorage.getItem('data'))
  let comp = []
  if (puzzle.length === 0) {
    puzzle = puzzleLS.puzzle
  }
  data.A = puzzle.slice(0, 9)
  data.B = puzzle.slice(9, 18)
  data.C = puzzle.slice(18, 27)
  data.D = puzzle.slice(27, 36)
  data.E = puzzle.slice(36, 45)
  data.F = puzzle.slice(45, 54)
  data.G = puzzle.slice(54, 63)
  data.H = puzzle.slice(63, 72)
  data.I = puzzle.slice(72, 81)
  localStorage.setItem('data', JSON.stringify(data))
}

module.exports = {
  setPuzzle,
  puzzle,
  solve,
  resetPuzzle
}
