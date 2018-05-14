// import _ from 'lodash'
import printMe from './print.js'
import './assets/css/style.css'
function component() {
  var element = document.createElement('div')
  var btn = document.createElement('button')

  element.innerHTML = [].join.call(['Hello', 'webpack', 'Sleepwalker'], ' ')
  element.classList.add('hello')
  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe

  element.appendChild(btn)

  return element
}

let element = component()
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the update printMe module!')
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}