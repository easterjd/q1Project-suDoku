(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let data = {
  A1: {
    a1: 0,
    a2: 0,
    a3: 0,
    b1: 0,
    b2: 0,
    b3: 0,
    c1: 0,
    c2: 0,
    c3: 0
  },
  A2: {
    a1: 0,
    a2: 0,
    a3: 0,
    b1: 0,
    b2: 0,
    b3: 0,
    c1: 0,
    c2: 0,
    c3: 0
  },
  A3: {
    a1: 0,
    a2: 0,
    a3: 0,
    b1: 0,
    b2: 0,
    b3: 0,
    c1: 0,
    c2: 0,
    c3: 0
  },
  B1: {
    a1: 0,
    a2: 0,
    a3: 0,
    b1: 0,
    b2: 0,
    b3: 0,
    c1: 0,
    c2: 0,
    c3: 0
  },
  B2: {
    a1: 0,
    a2: 0,
    a3: 0,
    b1: 0,
    b2: 0,
    b3: 0,
    c1: 0,
    c2: 0,
    c3: 0
  },
  B3: {
    a1: 0,
    a2: 0,
    a3: 0,
    b1: 0,
    b2: 0,
    b3: 0,
    c1: 0,
    c2: 0,
    c3: 0
  },
  C1: {
    a1: 0,
    a2: 0,
    a3: 0,
    b1: 0,
    b2: 0,
    b3: 0,
    c1: 0,
    c2: 0,
    c3: 0
  },
  C2: {
    a1: 0,
    a2: 0,
    a3: 0,
    b1: 0,
    b2: 0,
    b3: 0,
    c1: 0,
    c2: 0,
    c3: 0
  },
  C3: {
    a1: 0,
    a2: 0,
    a3: 0,
    b1: 0,
    b2: 0,
    b3: 0,
    c1: 0,
    c2: 0,
    c3: 0
  },
}

module.exports = data

},{}],2:[function(require,module,exports){
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

},{"./render":3}],3:[function(require,module,exports){
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

},{"./data":1}]},{},[2]);
