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
