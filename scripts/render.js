let data = require('./data')
let dataLS = JSON.parse(localStorage.getItem('data'))
let puzzles = require('./puzzles')
let puzzle = puzzles.puzzle
let solve = puzzles.solve
const events = require('./events')
const modalAdd = events.modalAdd
const newEventListeners = events.newEventListeners
let currentState = []
const modal = document.querySelector('#myModal')

const render = function (container) {
  dataLS = JSON.parse(localStorage.getItem('data'))
  puzzleLS = JSON.parse(localStorage.getItem('puzzle'))

  if (dataLS !== null && dataLS.A !== null && dataLS.A[0] !== null) {
    data = dataLS
  }
  if (!puzzleLS) {
    puzzleLS = {puzzle: [], solve: []}
  }
  if (solve.length === 0) {
    solve = puzzleLS.solve
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

      if (value === '.') {
        para.textContent = ''
      } else {
        para.textContent = value
      }

      para.classList.add('m-0')
      square.appendChild(para)
      container.appendChild(square)
    }
  }

  currentState = []
  const innerNum = Array.from(document.querySelectorAll('.square p'))
  innerNum.forEach( (element,index) => {
    let number = element.textContent
    currentState.push(number)
    if (number !== '') {
      if (number !== puzzleLS.solve[index]) {
        element.style.color = 'red'
      }
    }
  })

  if (currentState.join('') === solve.join('')) {
    $('#myModal').modal('show')
    modalAdd()
  }

  newEventListeners()
}

module.exports = render
