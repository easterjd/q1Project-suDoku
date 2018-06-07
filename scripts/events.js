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

  squares.forEach(element => element.addEventListener('click', function (event) {
    const clickSquare = event.target
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
    selected = event.target
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
    render(grid)
  }))

  newButton.addEventListener('click', (event) => {
    localStorage.removeItem('data')
    localStorage.removeItem('puzzle')
    setPuzzle(squares)
    render(grid)
  })

  restartButton.addEventListener('click', (event) => {
    event.preventDefault()
    resetPuzzle(squares)
    localStorage.setItem('data', JSON.stringify(data))
    render(grid)
  })
}

module.exports = {
  newEventListeners,
  selected
}
