const render = require('./render')
const grid = document.querySelector('#grid')

render(grid)

const squares = Array.from(document.querySelectorAll('.square'))
const innerNum = Array.from(document.querySelectorAll('.square p'))

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
  for (let square of squares) {
    if (square.style.borderColor = 'grey' && square !== clickSquare) {
      square.style.borderColor = 'white'
    }
  }
  clickSquare.style.borderColor = 'grey'
}))
