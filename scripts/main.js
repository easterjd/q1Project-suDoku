const render = require('./render')

const events = require('./events')
const newEventListeners = events.newEventListeners
let selected = events.selected

const grid = document.querySelector('#grid')

let puzzles = require('./puzzles')
let setPuzzle = puzzles.setPuzzle
let puzzle = puzzles.puzzle
let resetPuzzle = puzzles.resetPuzzle

let data = require('./data')
let dataLS = JSON.parse(localStorage.getItem('data'))

const squares = Array.from(document.querySelectorAll('.square'))
const innerNum = Array.from(document.querySelectorAll('.square p'))
const numButtons = Array.from(document.querySelectorAll('#nums .btn'))

const newButton = document.querySelector('#new')
const restartButton = document.querySelector('#restart')

render(grid)
