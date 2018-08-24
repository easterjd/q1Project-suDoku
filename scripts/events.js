const render = require('./render')

let selected = ''

let Timer = require('../node_modules/easytimer.js/dist/easytimer.min.js', function (Timer) {
    var timer = new Timer();
});

let timer = new Timer()

const newEventListeners = function () {

  let timeKeep = 0

  let puzzles = require('./puzzles')
  let setPuzzle = puzzles.setPuzzle
  let resetPuzzle = puzzles.resetPuzzle

  let data = require('./data')
  let dataLS = JSON.parse(localStorage.getItem('data'))

  const grid = document.querySelector('#grid')

  const numButtons = Array.from(document.querySelectorAll('#nums .btn'))

  const newButton = document.querySelector('#new')
  const restartButton = document.querySelector('#restart')
  const pauseButton = document.querySelector('.pause')
  const startButton = document.querySelector('.start')

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
    const clickRow = clickSquare.classList[4]
    const clickCol = clickSquare.classList[5]

    for (let square of squares) {
      if (square.style.borderColor = 'grey' && square !== clickSquare) {
        square.style.borderColor = 'white'
      }
    }

    squares.forEach(element => {
      let globalRow = element.classList[4]
      let globalCol = element.classList[5]
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

  squares.forEach(element => element.addEventListener('click', function (event) {
    const clickSquare = event.target
    const clickRow = clickSquare.classList[4]
    const clickCol = clickSquare.classList[5]

    for (let square of squares) {
      if (square.style.borderColor = 'grey' && square !== clickSquare) {
        square.style.borderColor = 'white'
      }
    }

    squares.forEach(element => {
      let globalRow = element.classList[4]
      let globalCol = element.classList[5]
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
    selected = event.target
  }))


  const render = require('./render')

  numButtons.forEach( element => element.addEventListener('click', (event) => {
    event.preventDefault()
    dataLS = JSON.parse(localStorage.getItem('data'))
    const col = selected.classList[5]
    const index = col[3]
    const row = selected.classList[4]
    dataLS[row][index] = event.target.textContent
    localStorage.setItem('data', JSON.stringify(dataLS))
    const selPara = selected.children
    selPara[0].textContent = event.target.textContent

    render(grid)
  }))

  newButton.addEventListener('click', (event) => {
    localStorage.removeItem('data')
    localStorage.removeItem('puzzle')
    setPuzzle(squares)
    render(grid)
    timer.stop()
    timer.start();
  })

  restartButton.addEventListener('click', (event) => {
    event.preventDefault()
    timer.stop()
    timer.start()

    resetPuzzle(squares)
    localStorage.setItem('data', JSON.stringify(data))
    render(grid)
  })

  if (!!startButton) {
    startButton.addEventListener('click', (event) => {
      timer.start()
      render(grid)
    })
  } else (
    pauseButton.addEventListener('click', (event) => {
      if (timer) {
        timer.pause()
      }
      pauseButton.textContent = 'Start'
      pauseButton.classList.remove('pause')
      pauseButton.classList.add('start')
      render(grid)
    })
  )

  if (!!pauseButton) {
    pauseButton.addEventListener('click', (event) => {
      if (timer) {
        timer.pause()
      }

      pauseButton.textContent = 'Start'
      pauseButton.classList.remove('pause')
      pauseButton.classList.add('start')
      render(grid)
    })
  } else {
    startButton.addEventListener('click', (event) => {
      timer.start()
      render(grid)
    })
  }

  timer.addEventListener('secondsUpdated', function (e) {
    $('#timer').html(timer.getTimeValues().toString());
    if (startButton) {
      startButton.textContent = 'Pause'
      startButton.classList.remove('start')
      startButton.classList.add('pause')
    }
  });
  timer.addEventListener('started', function (e) {
    $('#timer').html(timer.getTimeValues().toString());
  });
  timer.addEventListener('reset', function (e) {
    $('#timer').html(timer.getTimeValues().toString());
  });
}

document.addEventListener('keypress', (event) => {
  const render = require('./render')
  let key = event.which
  if (key < 49 || key > 57) {
    alert('Oops! You must type a number between 1-9!')
  } else if (key >= 49 || key <= 57) {
    dataLS = JSON.parse(localStorage.getItem('data'))
    const col = selected.classList[5]
    const index = col[3]
    const row = selected.classList[4]
    dataLS[row][index] = String.fromCharCode(key)
    localStorage.setItem('data', JSON.stringify(dataLS))
    const selPara = selected.children
    selPara[0].textContent = String.fromCharCode(key)

    render(grid)
  }
})

let puzzles = require('./puzzles')
let setPuzzle = puzzles.setPuzzle
const squares = Array.from(document.querySelectorAll('.square'))


const modalAdd = function () {
  const next = document.querySelector('#next')
  const render = require('./render')
  next.addEventListener('click', (event) => {
    localStorage.removeItem('data')
    localStorage.removeItem('puzzle')
    setPuzzle(squares)
    render(grid)
    timer.stop()
    timer.start();
    $('#myModal').modal('hide')
  })
}

module.exports = {
  newEventListeners,
  selected,
  modalAdd
}
