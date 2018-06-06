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
const grid = document.querySelector('#grid')
let puzzles = require('./puzzles')
let setPuzzle = puzzles.setPuzzle
let puzzle = puzzles.puzzle
let data = require('./data')
let dataLS = JSON.parse(localStorage.getItem('data'))

render(grid)

const squares = Array.from(document.querySelectorAll('.square'))
const innerNum = Array.from(document.querySelectorAll('.square p'))
let selected = ''
const numButtons = Array.from(document.querySelectorAll('#nums .btn'))

const newButton = document.querySelector('#new')

newButton.addEventListener('click', (event) => {
  event.preventDefault()
  setPuzzle(squares)

  localStorage.setItem('data', JSON.stringify(dataLS))
})

// squares.forEach(element => element.addEventListener('click', function (event) {
//
//   for (let square of squares) {
//     if (square.style.borderColor = 'grey' && square !== event.target) {
//       square.style.borderColor = 'white'
//     }
//   }
//   event.target.style.borderColor = 'grey'
//
// }))
// Easier to use paragraph elements to click
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
    console.log(globalRow === clickRow)
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

  // clickSiblings.forEach(element => {
  //   element.style.borderColor = 'grey'
  // })
  clickSquare.style.borderColor = '#69DD36'
  selected = event.target.parentNode
}))

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

},{"./data":1,"./puzzles":3,"./render":4}],3:[function(require,module,exports){
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

},{"./data":1}],4:[function(require,module,exports){
let data = require('./data')
let dataLS = JSON.parse(localStorage.getItem('data'))

const render = function (container) {
  // console.log(data)
  if (dataLS !== null) {
    data = dataLS
  } else {
    dataLS = data
  }
  let keys = Array.from(Object.keys(data))
  for (let p = 0; p < keys.length; p++) {
    const key = keys[p]
    // const group = document.createElement('div')
    // group.classList.add('d-flex')
    // group.classList.add('flex-wrap')
    // group.classList.add('justify-content-between')

    // let keys = Object.keys(data[groups])
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
      // group.appendChild(square)
      container.appendChild(square)
    }

  }
  // for (let i = 0; i < 81; i++) {
  //   const square = document.createElement('div')
  //   square.classList.add('square')
  //   const para = document.createElement('p')
  //   square.appendChild(para)
  //   container.appendChild(square)
  // }
}

module.exports = render

},{"./data":1}]},{},[2]);
