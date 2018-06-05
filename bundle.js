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

},{"./data":1,"./render":3}],3:[function(require,module,exports){
let data = require('./data')
let dataLS = JSON.parse(localStorage.getItem('data'))

const render = function (container) {
  console.log(data)
  if (dataLS !== undefined) {
    data = dataLS
  }
  for (let groups in data) {
    const group = document.createElement('div')
    group.classList.add('d-flex')
    group.classList.add('flex-wrap')
    group.classList.add('justify-content-between')
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
