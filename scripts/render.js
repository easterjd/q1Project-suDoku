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
