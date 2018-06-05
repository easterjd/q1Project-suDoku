const render = require('./render')
const grid = document.querySelector('#grid')
let data = require('./data')
let dataLS = JSON.parse(localStorage.getItem('data'))

render(grid)

const squares = Array.from(document.querySelectorAll('.square'))
const innerNum = Array.from(document.querySelectorAll('.square p'))
let selected = ''
const numButtons = Array.from(document.querySelectorAll('#nums .btn'))

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

innerNum.forEach(element => element.addEventListener('click', function (event) {
  const clickSquare = event.target.parentNode
  const clickGroup = clickSquare.parentNode
  const clickSiblings = Array.from(clickGroup.childNodes)
  for (let square of squares) {
    if (square.style.borderColor = 'grey' && square !== clickSquare) {
      square.style.borderColor = 'white'
    }
  }

  const groupID = clickGroup.classList[3]
  const squareID = event.target.parentNode.classList[4]

  squares.forEach(element => {
    let globalGroups = element.parentNode.classList[3]
    let globalSquares = element.classList[4]
    if (globalGroups[1] === groupID[1] && globalSquares[1] === squareID[1]) {
      element.style.borderColor = 'grey'
    }
    if (globalGroups[0] === groupID[0] && globalSquares[0] === squareID[0]) {
      element.style.borderColor = 'grey'
    }
  })

  clickSiblings.forEach(element => {
    element.style.borderColor = 'grey'
  })
  clickSquare.style.borderColor = '#69DD36'
  selected = event.target.parentNode
}))

numButtons.forEach( element => element.addEventListener('click', (event) => {
  event.preventDefault()
  const parentGroup = selected.parentNode.classList
  dataLS[parentGroup[3]][selected.classList[4]] = parseInt(event.target.textContent)
  console.log(dataLS);
  localStorage.setItem('data', JSON.stringify(dataLS))
  const selPara = selected.children
  selPara[0].textContent = parseInt(event.target.textContent)
}))
