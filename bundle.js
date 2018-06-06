(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let data = {
  A: ['.', '.', '.', '.', '.', '.', '.', '.', '.',],
  B: ['.', '.', '.', '.', '.', '.', '.', '.', '.',],
  C: ['.', '.', '.', '.', '.', '.', '.', '.', '.',],
  D: ['.', '.', '.', '.', '.', '.', '.', '.', '.',],
  E: ['.', '.', '.', '.', '.', '.', '.', '.', '.',],
  F: ['.', '.', '.', '.', '.', '.', '.', '.', '.',],
  G: ['.', '.', '.', '.', '.', '.', '.', '.', '.',],
  H: ['.', '.', '.', '.', '.', '.', '.', '.', '.',],
  I: ['.', '.', '.', '.', '.', '.', '.', '.', '.',]
}



module.exports = data

},{}],2:[function(require,module,exports){
const render = require('./render')

let selected = ''

const newEventListeners = function () {
  let puzzles = require('./puzzles')
  let setPuzzle = puzzles.setPuzzle
  let resetPuzzle = puzzles.resetPuzzle

  let data = require('./data')
  let dataLS = JSON.parse(localStorage.getItem('data'))

  const numButtons = Array.from(document.querySelectorAll('#nums .btn'))

  const newButton = document.querySelector('#new')
  const restartButton = document.querySelector('#restart')

  const squares = Array.from(document.querySelectorAll('.square'))
  const innerNum = Array.from(document.querySelectorAll('.square p'))

  const colGroup1 = Array.from(document.querySelectorAll('.col0, .col1, .col2'))
  const colGroup2 = Array.from(document.querySelectorAll('.col3, .col4, .col5'))
  const colGroup3 = Array.from(document.querySelectorAll('.col6, .col7, .col8'))
  const rowGroupA = Array.from(document.querySelectorAll('.A, .B, .C'))
  const rowGroupB = Array.from(document.querySelectorAll('.D, .E, .F'))
  const rowGroupC = Array.from(document.querySelectorAll('.G, .H, .I'))

  innerNum.forEach(element => element.addEventListener('click', function (event) {
    const clickSquare = event.target.parentNode
    // const clickGroup = clickSquare.parentNode
    const clickRow = clickSquare.classList[4]
    const clickCol = clickSquare.classList[5]

    for (let square of squares) {
      if (square.style.borderColor = 'grey' && square !== clickSquare) {
        square.style.borderColor = 'white'
      }
    }

    squares.forEach(element => {
      // let globalGroups = element.parentNode.classList[3]
      let globalRow = element.classList[4]
      let globalCol = element.classList[5]
      // console.log(globalRow === clickRow)
      if (globalRow === clickRow)  {
        element.style.borderColor = 'grey'
      }
      if (globalCol === clickCol) {
        element.style.borderColor = 'grey'
      }
      //Selecting groups is HARD:
      if (colGroup1.includes(clickSquare)) {
        if (rowGroupA.includes(clickSquare)) {
          if (colGroup1.includes(element) && rowGroupA.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupB.includes(clickSquare)) {
          if (colGroup1.includes(element) && rowGroupB.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupC.includes(clickSquare)) {
          if (colGroup1.includes(element) && rowGroupC.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
      }
      if (colGroup2.includes(clickSquare)) {
        if (rowGroupA.includes(clickSquare)) {
          if (colGroup2.includes(element) && rowGroupA.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupB.includes(clickSquare)) {
          if (colGroup2.includes(element) && rowGroupB.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupC.includes(clickSquare)) {
          if (colGroup2.includes(element) && rowGroupC.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
      }
      if (colGroup3.includes(clickSquare)) {
        if (rowGroupA.includes(clickSquare)) {
          if (colGroup3.includes(element) && rowGroupA.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupB.includes(clickSquare)) {
          if (colGroup3.includes(element) && rowGroupB.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupC.includes(clickSquare)) {
          if (colGroup3.includes(element) && rowGroupC.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
      }
    })

    clickSquare.style.borderColor = '#69DD36'
    selected = event.target.parentNode
  }))

  const render = require('./render')

  numButtons.forEach( element => element.addEventListener('click', (event) => {
    event.preventDefault()
    const col = selected.classList[5]
    const index = col[3]
    const row = selected.classList[4]
    dataLS[row][index] = event.target.textContent
    localStorage.setItem('data', JSON.stringify(dataLS))
    const selPara = selected.children
    selPara[0].textContent = event.target.textContent
  }))

  newButton.addEventListener('click', (event) => {
    localStorage.clear('data')
    setPuzzle(squares)
    render(grid)
  })

  restartButton.addEventListener('click', (event) => {
    event.preventDefault()
    resetPuzzle(squares)
    localStorage.setItem('data', JSON.stringify(data))
  })
}

module.exports = {
  newEventListeners,
  selected
}

},{"./data":1,"./puzzles":4,"./render":5}],3:[function(require,module,exports){
const render = require('./render')

const events = require('./events')
const newEventListeners = events.newEventListeners
let selected = events.selected

const grid = document.querySelector('#grid')

let puzzles = require('./puzzles')
let setPuzzle = puzzles.setPuzzle
let puzzle = puzzles.puzzle
let resetPuzzle = puzzles.resetPuzzle

let data = require('./data')
let dataLS = JSON.parse(localStorage.getItem('data'))

const squares = Array.from(document.querySelectorAll('.square'))
const innerNum = Array.from(document.querySelectorAll('.square p'))
const numButtons = Array.from(document.querySelectorAll('#nums .btn'))

const newButton = document.querySelector('#new')
const restartButton = document.querySelector('#restart')

render(grid)





module.exports = newEventListeners

},{"./data":1,"./events":2,"./puzzles":4,"./render":5}],4:[function(require,module,exports){
let data = require('./data')

let puzzle = []
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
  // for (let i = 0; i < squares.length; i++) {
  //   let square = squares[i]
  //   let para = square.children[0]
  //   para.textContent = puzzle[i]
  // }
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

function resetPuzzle (squares) {
  const dataLS = JSON.parse(localStorage.getItem('data'))
  if (puzzle.length === 0) {
    for (keys in dataLS) {
      let row = dataLS.keys
      puzzle.concat(row)
    }
  }
  for (let i = 0; i < squares.length; i++) {
    let square = squares[i]
    let para = square.children[0]
    para.textContent = puzzle[i]
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
}

module.exports = {
  setPuzzle,
  puzzle,
  solve,
  resetPuzzle
}

},{"./data":1}],5:[function(require,module,exports){
let data = require('./data')
let dataLS = JSON.parse(localStorage.getItem('data'))
let puzzles = require('./puzzles')
let puzzle = puzzles.puzzle
const events = require('./events')
const newEventListeners = events.newEventListeners

const render = function (container) {
  dataLS = JSON.parse(localStorage.getItem('data'))
  console.log(data)
  console.log(puzzle);
  console.log(dataLS);

  if (dataLS !== null) {
    if (dataLS.A !== null) {
      if (dataLS.A[0] !== null) {
        data = dataLS
      }
    }
  }
  container.innerHTML = ''
  let keys = Array.from(Object.keys(data))
  for (let p = 0; p < keys.length; p++) {
    const key = keys[p]

    for (let i = 0; i < data[key].length; i++) {
      const value = data[key][i]
      const square = document.createElement('div')
      square.classList.add('square')
      square.classList.add('align-content-around')
      square.classList.add('text-center')
      square.classList.add('pt-2')
      square.classList.add(key)
      square.classList.add(`col${i}`)
      const para = document.createElement('p')
      para.textContent = value
      para.classList.add('m-0')
      square.appendChild(para)
      container.appendChild(square)
    }
  }
  newEventListeners()
}

module.exports = render

},{"./data":1,"./events":2,"./puzzles":4}]},{},[3]);
