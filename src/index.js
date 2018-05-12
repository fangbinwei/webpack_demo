// import _ from 'lodash'

function component() {
  var element = document.createElement('div')

  element.innerHTML = [].join.call(['Hello', 'webpack', 'Sleepwalker'], ' ')
  return element
}

document.body.appendChild(component())