(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * easytimer.js
 * Generated: 2018-06-04
 * Version: 2.2.2
 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.Timer=n()}(this,function(){"use strict";function s(t,n,e){var o=void 0,i="";if(t.length>n)return t;for(o=0;o<n;o+=1)i+=String(e);return(i+t).slice(-i.length)}function P(){this.secondTenths=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0,this.toString=function(t,n,e){t=t||["hours","minutes","seconds"],n=n||":",e=e||2;var o=[],i=void 0;for(i=0;i<t.length;i+=1)void 0!==this[t[i]]&&("secondTenths"===t[i]?o.push(this[t[i]]):o.push(s(this[t[i]],e,"0")));return o.join(n)}}var t="undefined"!=typeof window?window.CustomEvent:void 0;"undefined"!=typeof window&&"function"!=typeof t&&((t=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),e}).prototype=window.Event.prototype,window.CustomEvent=t);var q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I="secondTenths",O="seconds",z="minutes",R="hours",B="days",F={secondTenths:100,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},G={secondTenths:10,seconds:60,minutes:60,hours:24},H="undefined"!=typeof module&&module.exports&&"function"==typeof require?require("events"):void 0;function J(){return"undefined"!=typeof document}function K(){return H}function N(t,n){return(t%n+n)%n}return function(){var s=new P,r=new P,i=void 0,e=J()?document.createElement("span"):K()?new H.EventEmitter:void 0,u=!1,d=!1,c=void 0,a=void 0,f=void 0,v={},h=void 0,l=void 0,p=void 0,m=void 0,y=void 0,o=void 0,b={detail:{timer:this}};function w(t,n){var e,o,i=r[n];return o=U(t,F[e=n]),r[e]=o,s[e]=e===B?o:0<=o?N(o,G[e]):G[e]-N(o,G[e]),r[n]!==i}function t(){n(),function(){for(var t in s)s.hasOwnProperty(t)&&"number"==typeof s[t]&&(s[t]=0);for(var n in r)r.hasOwnProperty(n)&&"number"==typeof r[n]&&(r[n]=0)}()}function n(){clearInterval(i),i=void 0,d=u=!1}function g(t){var n,e,o;M()?(y=E(),l=V(h.target)):(c="string"==typeof(e=(e=t)||{}).precision?e.precision:O,f="function"==typeof e.callback?e.callback:function(){},m=!0===e.countdown,a=!0===m?-1:1,"object"===q(e.startValues)?(o=e.startValues,p=L(o),s.secondTenths=p[0],s.seconds=p[1],s.minutes=p[2],s.hours=p[3],s.days=p[4],r=A(p,r)):p=null,y=E(),S(),"object"===q(e.target)?l=V(e.target):m?(e.target={seconds:0},l=V(e.target)):l=null,v={precision:c,callback:f,countdown:"object"===(void 0===e?"undefined":q(e))&&!0===e.countdown,target:l,startValues:p},h=e),n=F[c],C(j(Date.now()))||(i=setInterval(T,n),d=!(u=!0))}function E(){return j(Date.now())-r.secondTenths*F[I]*a}function T(){var t,n=j(Date.now());(t=S())[I]&&k("secondTenthsUpdated",b),t[O]&&k("secondsUpdated",b),t[z]&&k("minutesUpdated",b),t[R]&&k("hoursUpdated",b),t[B]&&k("daysUpdated",b),f(b.detail.timer),C(n)&&(D(),k("targetAchieved",b))}function S(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:j(Date.now()),n=0<a?t-y:y-t,e={};return e[I]=w(n,I),e[O]=w(n,O),e[z]=w(n,z),e[R]=w(n,R),e[B]=w(n,B),e}function j(t){return Math.floor(t/F[c])*F[c]}function C(t){return l instanceof Array&&o<=t}function L(t){var n,e,o,i,s,r=void 0;if("object"===(void 0===t?"undefined":q(t)))if(t instanceof Array){if(5!==t.length)throw new Error("Array size not valid");r=t}else r=[t.secondTenths||0,t.seconds||0,t.minutes||0,t.hours||0,t.days||0];return n=r[0],e=r[1]+U(n,10),o=r[2]+U(e,60),i=r[3]+U(o,60),s=r[4]+U(i,24),r[0]=n%10,r[1]=e%60,r[2]=o%60,r[3]=i%24,r[4]=s,r}function U(t,n){var e=t/n;return e<0?Math.ceil(e):Math.floor(e)}function V(t){if(t){var n=A(l=L(t));return o=y+n.secondTenths*F[I]*a,l}}function A(t,n){var e=n||{};return e.days=t[4],e.hours=24*e.days+t[3],e.minutes=60*e.hours+t[2],e.seconds=60*e.minutes+t[1],e.secondTenths=10*e.seconds+t[[0]],e}function D(){t(),k("stopped",b)}function k(t,n){J()?e.dispatchEvent(new CustomEvent(t,n)):K()&&e.emit(t,n)}function x(){return u}function M(){return d}void 0!==this&&(this.start=function(t){x()||(g(t),k("started",b))},this.pause=function(){n(),d=!0,k("paused",b)},this.stop=D,this.reset=function(){t(),g(h),k("reset",b)},this.isRunning=x,this.isPaused=M,this.getTimeValues=function(){return s},this.getTotalTimeValues=function(){return r},this.getConfig=function(){return v},this.addEventListener=function(t,n){J()?e.addEventListener(t,n):K()&&e.on(t,n)},this.removeEventListener=function(t,n){J()?e.removeEventListener(t,n):K()&&e.removeListener(t,n)})}});

},{"events":2}],2:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var objectCreate = Object.create || objectCreatePolyfill
var objectKeys = Object.keys || objectKeysPolyfill
var bind = Function.prototype.bind || functionBindPolyfill

function EventEmitter() {
  if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
    this._events = objectCreate(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

var hasDefineProperty;
try {
  var o = {};
  if (Object.defineProperty) Object.defineProperty(o, 'x', { value: 0 });
  hasDefineProperty = o.x === 0;
} catch (err) { hasDefineProperty = false }
if (hasDefineProperty) {
  Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      // check whether the input is a positive number (whose value is zero or
      // greater and not a NaN).
      if (typeof arg !== 'number' || arg < 0 || arg !== arg)
        throw new TypeError('"defaultMaxListeners" must be a positive number');
      defaultMaxListeners = arg;
    }
  });
} else {
  EventEmitter.defaultMaxListeners = defaultMaxListeners;
}

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2, arg3);
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].apply(self, args);
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    doError = (doError && events.error == null);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    if (arguments.length > 1)
      er = arguments[1];
    if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Unhandled "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    return false;

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
      // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
      // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');

  events = target._events;
  if (!events) {
    events = target._events = objectCreate(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
          listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
          prepend ? [listener, existing] : [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
            existing.length + ' "' + String(type) + '" listeners ' +
            'added. Use emitter.setMaxListeners() to ' +
            'increase limit.');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        if (typeof console === 'object' && console.warn) {
          console.warn('%s: %s', w.name, w.message);
        }
      }
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    switch (arguments.length) {
      case 0:
        return this.listener.call(this.target);
      case 1:
        return this.listener.call(this.target, arguments[0]);
      case 2:
        return this.listener.call(this.target, arguments[0], arguments[1]);
      case 3:
        return this.listener.call(this.target, arguments[0], arguments[1],
            arguments[2]);
      default:
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; ++i)
          args[i] = arguments[i];
        this.listener.apply(this.target, args);
    }
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = bind.call(onceWrapper, state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = this._events;
      if (!events)
        return this;

      list = events[type];
      if (!list)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = objectCreate(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else
          spliceOne(list, position);

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (!events)
        return this;

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = objectCreate(null);
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = objectCreate(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = objectKeys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = objectCreate(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (!events)
    return [];

  var evlistener = events[type];
  if (!evlistener)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function objectCreatePolyfill(proto) {
  var F = function() {};
  F.prototype = proto;
  return new F;
}
function objectKeysPolyfill(obj) {
  var keys = [];
  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) {
    keys.push(k);
  }
  return k;
}
function functionBindPolyfill(context) {
  var fn = this;
  return function () {
    return fn.apply(context, arguments);
  };
}

},{}],3:[function(require,module,exports){
let data = {
  A: ['.', '.', '.', '.', '.', '.', '.', '.', '.',],
  B: ['.', '.', '.', '.', '.', '.', '.', '.', '.',],
  C: ['.', '.', '.', '.', '.', '.', '.', '.', '.',],
  D: ['.', '.', '.', '.', '.', '.', '.', '.', '.',],
  E: ['.', '.', '.', '.', '.', '.', '.', '.', '.',],
  F: ['.', '.', '.', '.', '.', '.', '.', '.', '.',],
  G: ['.', '.', '.', '.', '.', '.', '.', '.', '.',],
  H: ['.', '.', '.', '.', '.', '.', '.', '.', '.',],
  I: ['.', '.', '.', '.', '.', '.', '.', '.', '.',]
}



module.exports = data

},{}],4:[function(require,module,exports){
const render = require('./render')

let selected = ''

let Timer = require('../node_modules/easytimer.js/dist/easytimer.min.js', function (Timer) {
    var timer = new Timer();
});

let timer = new Timer()

const newEventListeners = function () {

  let timeKeep = 0

  let puzzles = require('./puzzles')
  let setPuzzle = puzzles.setPuzzle
  let resetPuzzle = puzzles.resetPuzzle

  let data = require('./data')
  let dataLS = JSON.parse(localStorage.getItem('data'))

  const grid = document.querySelector('#grid')

  const numButtons = Array.from(document.querySelectorAll('#nums .btn'))

  const newButton = document.querySelector('#new')
  const restartButton = document.querySelector('#restart')
  const pauseButton = document.querySelector('.pause')
  const startButton = document.querySelector('.start')

  const squares = Array.from(document.querySelectorAll('.square'))
  const innerNum = Array.from(document.querySelectorAll('.square p'))

  const colGroup1 = Array.from(document.querySelectorAll('.col0, .col1, .col2'))
  const colGroup2 = Array.from(document.querySelectorAll('.col3, .col4, .col5'))
  const colGroup3 = Array.from(document.querySelectorAll('.col6, .col7, .col8'))
  const rowGroupA = Array.from(document.querySelectorAll('.A, .B, .C'))
  const rowGroupB = Array.from(document.querySelectorAll('.D, .E, .F'))
  const rowGroupC = Array.from(document.querySelectorAll('.G, .H, .I'))

  innerNum.forEach(element => element.addEventListener('click', function (event) {
    const clickSquare = event.target.parentNode
    // const clickGroup = clickSquare.parentNode
    const clickRow = clickSquare.classList[4]
    const clickCol = clickSquare.classList[5]

    for (let square of squares) {
      if (square.style.borderColor = 'grey' && square !== clickSquare) {
        square.style.borderColor = 'white'
      }
    }

    squares.forEach(element => {
      // let globalGroups = element.parentNode.classList[3]
      let globalRow = element.classList[4]
      let globalCol = element.classList[5]
      // console.log(globalRow === clickRow)
      if (globalRow === clickRow)  {
        element.style.borderColor = 'grey'
      }
      if (globalCol === clickCol) {
        element.style.borderColor = 'grey'
      }
      //Selecting groups is HARD:
      if (colGroup1.includes(clickSquare)) {
        if (rowGroupA.includes(clickSquare)) {
          if (colGroup1.includes(element) && rowGroupA.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupB.includes(clickSquare)) {
          if (colGroup1.includes(element) && rowGroupB.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupC.includes(clickSquare)) {
          if (colGroup1.includes(element) && rowGroupC.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
      }
      if (colGroup2.includes(clickSquare)) {
        if (rowGroupA.includes(clickSquare)) {
          if (colGroup2.includes(element) && rowGroupA.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupB.includes(clickSquare)) {
          if (colGroup2.includes(element) && rowGroupB.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupC.includes(clickSquare)) {
          if (colGroup2.includes(element) && rowGroupC.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
      }
      if (colGroup3.includes(clickSquare)) {
        if (rowGroupA.includes(clickSquare)) {
          if (colGroup3.includes(element) && rowGroupA.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupB.includes(clickSquare)) {
          if (colGroup3.includes(element) && rowGroupB.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupC.includes(clickSquare)) {
          if (colGroup3.includes(element) && rowGroupC.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
      }
    })

    clickSquare.style.borderColor = '#69DD36'
    selected = event.target.parentNode
  }))

  squares.forEach(element => element.addEventListener('click', function (event) {
    const clickSquare = event.target
    // const clickGroup = clickSquare.parentNode
    const clickRow = clickSquare.classList[4]
    const clickCol = clickSquare.classList[5]

    for (let square of squares) {
      if (square.style.borderColor = 'grey' && square !== clickSquare) {
        square.style.borderColor = 'white'
      }
    }

    squares.forEach(element => {
      // let globalGroups = element.parentNode.classList[3]
      let globalRow = element.classList[4]
      let globalCol = element.classList[5]
      // console.log(globalRow === clickRow)
      if (globalRow === clickRow)  {
        element.style.borderColor = 'grey'
      }
      if (globalCol === clickCol) {
        element.style.borderColor = 'grey'
      }
      //Selecting groups is HARD:
      if (colGroup1.includes(clickSquare)) {
        if (rowGroupA.includes(clickSquare)) {
          if (colGroup1.includes(element) && rowGroupA.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupB.includes(clickSquare)) {
          if (colGroup1.includes(element) && rowGroupB.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupC.includes(clickSquare)) {
          if (colGroup1.includes(element) && rowGroupC.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
      }
      if (colGroup2.includes(clickSquare)) {
        if (rowGroupA.includes(clickSquare)) {
          if (colGroup2.includes(element) && rowGroupA.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupB.includes(clickSquare)) {
          if (colGroup2.includes(element) && rowGroupB.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupC.includes(clickSquare)) {
          if (colGroup2.includes(element) && rowGroupC.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
      }
      if (colGroup3.includes(clickSquare)) {
        if (rowGroupA.includes(clickSquare)) {
          if (colGroup3.includes(element) && rowGroupA.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupB.includes(clickSquare)) {
          if (colGroup3.includes(element) && rowGroupB.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
        if (rowGroupC.includes(clickSquare)) {
          if (colGroup3.includes(element) && rowGroupC.includes(element)) {
            element.style.borderColor = 'grey'
          }
        }
      }
    })

    clickSquare.style.borderColor = '#69DD36'
    selected = event.target
  }))


  const render = require('./render')

  numButtons.forEach( element => element.addEventListener('click', (event) => {
    event.preventDefault()
    dataLS = JSON.parse(localStorage.getItem('data'))
    const col = selected.classList[5]
    const index = col[3]
    const row = selected.classList[4]
    dataLS[row][index] = event.target.textContent
    localStorage.setItem('data', JSON.stringify(dataLS))
    const selPara = selected.children
    selPara[0].textContent = event.target.textContent

    render(grid)
  }))

  document.addEventListener('keypress', (event) => {
    let key = event.which
    console.log(key)
    if (key < 49 || key > 57) {
      alert('Oops! You must type a number between 1-9!')
    }
    if (key >= 49 || key <= 57) {
      dataLS = JSON.parse(localStorage.getItem('data'))
      const col = selected.classList[5]
      const index = col[3]
      const row = selected.classList[4]
      dataLS[row][index] = String.fromCharCode(key)
      localStorage.setItem('data', JSON.stringify(dataLS))
      const selPara = selected.children
      selPara[0].textContent = String.fromCharCode(key)

      render(grid)
    }
  })

  newButton.addEventListener('click', (event) => {
    localStorage.removeItem('data')
    localStorage.removeItem('puzzle')
    setPuzzle(squares)
    render(grid)
    timer.stop()
    timer.start();


  })

  restartButton.addEventListener('click', (event) => {
    event.preventDefault()
    timer.stop()
    timer.start()

    resetPuzzle(squares)
    localStorage.setItem('data', JSON.stringify(data))
    render(grid)
  })

  if (!!startButton) {
    startButton.addEventListener('click', (event) => {
      // let pauseText = pauseButton.textContent
      timer.start()
      render(grid)
    })
  } else (
    pauseButton.addEventListener('click', (event) => {
      if (timer) {
        timer.pause()
      }
      pauseButton.textContent = 'Start'
      pauseButton.classList.remove('pause')
      pauseButton.classList.add('start')
      render(grid)
    })
  )

  if (!!pauseButton) {
    pauseButton.addEventListener('click', (event) => {
      if (timer) {
        timer.pause()
      }

      pauseButton.textContent = 'Start'
      pauseButton.classList.remove('pause')
      pauseButton.classList.add('start')
      render(grid)
    })
  } else {
    startButton.addEventListener('click', (event) => {
      // let pauseText = pauseButton.textContent
      timer.start()
      render(grid)
    })
  }




  timer.addEventListener('secondsUpdated', function (e) {
    $('#timer').html(timer.getTimeValues().toString());
    if (startButton) {
      startButton.textContent = 'Pause'
      startButton.classList.remove('start')
      startButton.classList.add('pause')
    }
  });
  timer.addEventListener('started', function (e) {
    $('#timer').html(timer.getTimeValues().toString());
  });
  timer.addEventListener('reset', function (e) {
    $('#timer').html(timer.getTimeValues().toString());
  });
}

module.exports = {
  newEventListeners,
  selected
}

},{"../node_modules/easytimer.js/dist/easytimer.min.js":1,"./data":3,"./puzzles":6,"./render":7}],5:[function(require,module,exports){
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

},{"./data":3,"./events":4,"./puzzles":6,"./render":7}],6:[function(require,module,exports){
let data = require('./data')

let puzzle = []
let puzzleLS = JSON.parse(localStorage.getItem('puzzle'))
let solve = []

const stock1 = {
  puzz: '.13.....22.....48....7...19...9..8..7......2....3.......263.9..4.9.7.6....149...8',
  solve: '913584762257169483648723519136942857795816324824357196572638941489271635361495278',
  diff: 'Easy'
}

const stock2 = {
  puzz: '5...7.6..41..53..7.6712...884.....1.....1.3.6...7...2........65......87..3.......',
  solve: '529478631418653297367129458846532719275914386193786524982347165654291873731865942',
  diff: 'Simple'
}

const stock3 = {
  puzz: '...6..4.9..8........3..9.....17.5...8.......1.4.3......3.....561......3..94..8..7',
  solve: '512673489978142563463859712321795648859426371746381295237914856185267934694538127',
  diff: 'Intermediate'
}

const stock4 = {
  puzz: '.46...58.718.....65...4....1....675..8.....1..2...58.4.....74...69....7.2....1...',
  solve: '946712583718359246532648197193486752485273619627195834351967428869524371274831965',
  diff: 'Easy'
}

const stock5 = {
  puzz: '6.......1...63.....8241...9.....5.1..4.......2.9..8..5..4....8.....2.46.5........',
  solve: '697852341451639278382417659873265914145973826269148735714396582938521467526784193',
  diff: 'Easy'
}

const stock6 = {
  puzz:'........49.1.6.5....8....9.8..4.37.6....1....54...718.....39..7....4..5....7..81.',
  solve: '756981234921364578438572691819453726673218945542697183285139467197846352364725819',
  diff: 'Expert'
}

const chooser = [stock1, stock2, stock3, stock4, stock5, stock6]

function setPuzzle (squares) {
  let chosen = chooser[Math.floor(Math.random() * 5)]
  puzzle = chosen.puzz.split('')
  solve = chosen.solve.split('')

  // for (let i = 0; i < squares.length; i++) {
  //   let square = squares[i]
  //   let para = square.children[0]
  //   para.textContent = puzzle[i]
  // }
  data.A = puzzle.slice(0, 9)
  data.B = puzzle.slice(9, 18)
  data.C = puzzle.slice(18, 27)
  data.D = puzzle.slice(27, 36)
  data.E = puzzle.slice(36, 45)
  data.F = puzzle.slice(45, 54)
  data.G = puzzle.slice(54, 63)
  data.H = puzzle.slice(63, 72)
  data.I = puzzle.slice(72, 81)
  localStorage.setItem('data', JSON.stringify(data))
  localStorage.setItem('puzzle', JSON.stringify({puzzle, solve}))
}

function resetPuzzle (squares) {
  const dataLS = JSON.parse(localStorage.getItem('data'))
  let comp = []
  if (puzzle.length === 0) {
    puzzle = puzzleLS.puzzle
  }
  // for (let i = 0; i < squares.length; i++) {
  //   let square = squares[i]
  //   let para = square.children[0]
  //   para.textContent = puzzle[i]
  // }
  data.A = puzzle.slice(0, 9)
  data.B = puzzle.slice(9, 18)
  data.C = puzzle.slice(18, 27)
  data.D = puzzle.slice(27, 36)
  data.E = puzzle.slice(36, 45)
  data.F = puzzle.slice(45, 54)
  data.G = puzzle.slice(54, 63)
  data.H = puzzle.slice(63, 72)
  data.I = puzzle.slice(72, 81)
  localStorage.setItem('data', JSON.stringify(data))
}

module.exports = {
  setPuzzle,
  puzzle,
  solve,
  resetPuzzle
}

},{"./data":3}],7:[function(require,module,exports){
let data = require('./data')
let dataLS = JSON.parse(localStorage.getItem('data'))
let puzzles = require('./puzzles')
let puzzle = puzzles.puzzle
let solve = puzzles.solve
const events = require('./events')
const newEventListeners = events.newEventListeners
let currentState = []
const modal = document.querySelector('#myModal')

const render = function (container) {
  dataLS = JSON.parse(localStorage.getItem('data'))
  puzzleLS = JSON.parse(localStorage.getItem('puzzle'))
  // console.log(data)
  // console.log(puzzle);
  // console.log(dataLS);

  if (dataLS !== null && dataLS.A !== null && dataLS.A[0] !== null) {
    data = dataLS
  }
  // console.log(data);
  // console.log(dataLS);
  if (!puzzleLS) {
    puzzleLS = {puzzle: [], solve: []}
  }
  if (solve.length === 0) {
    solve = puzzleLS.solve
  }
  // console.log(solve)
  container.innerHTML = ''
  let keys = Array.from(Object.keys(data))
  for (let p = 0; p < keys.length; p++) {
    const key = keys[p]

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

      if (value === '.') {
        para.textContent = ''
      } else {
        para.textContent = value
      }

      para.classList.add('m-0')
      square.appendChild(para)
      container.appendChild(square)
    }
  }

  currentState = []
  const innerNum = Array.from(document.querySelectorAll('.square p'))
  innerNum.forEach( (element,index) => {
    let number = element.textContent
    currentState.push(number)
    if (number !== '') {
      if (number !== puzzleLS.solve[index]) {
        element.style.color = 'red'
      }
    }
  })

  if (currentState.join('') === solve.join('')) {
    modal.modal('toggle')
  }

  newEventListeners()
}

module.exports = render

},{"./data":3,"./events":4,"./puzzles":6}]},{},[5]);
