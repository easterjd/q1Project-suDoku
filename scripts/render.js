

const render = function (container) {
  for (let i = 0; i < 81; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    const para = document.createElement('p')
    square.appendChild(para)
    container.appendChild(square)
  }
}

module.exports = render
