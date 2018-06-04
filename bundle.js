(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./render":2}],2:[function(require,module,exports){


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

},{}]},{},[1]);
