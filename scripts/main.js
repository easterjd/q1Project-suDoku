const render = require('./render')
const grid = document.querySelector('#grid')

render(grid)

const squares = Array.from(document.querySelectorAll('.square'))

squares.forEach(element => element.addEventListener('click', function (event) {

  for (let square of squares) {
    if (square.style.borderColor = 'grey' && square !== event.target) {
      square.style.borderColor = 'white'
      event.target.style.borderColor = 'grey'
    }
  }

}))
