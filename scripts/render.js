const data = require('./data')

const render = function (container) {
  for (let groups in data) {
    const group = document.createElement('div')
    group.classList.add('d-flex')
    group.classList.add('flex-wrap')
    group.classList.add('flex-fill')
    group.classList.add(groups)

    let keys = Object.keys(data[groups])
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      const square = document.createElement('div')
      square.classList.add('square')
      square.classList.add('align-content-around')
      square.classList.add('text-center')
      square.classList.add('pt-2')
      square.classList.add(key)
      const para = document.createElement('p')
      para.textContent = data[groups][key]
      para.classList.add('m-0')
      square.appendChild(para)
      group.appendChild(square)
    }
    container.appendChild(group)

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
