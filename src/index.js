// import _ from 'lodash'
import './assets/css/style.css'
import Icon from './assets/img/icon.png'

function component() {
  var element = document.createElement('div')

  element.innerHTML = [].join.call(['Hello', 'webpack', 'Sleepwalker'], ' ')
  element.classList.add('hello')
  
  var myIcon = new Image()
  myIcon.src = Icon

  element.appendChild(myIcon)
  return element
}

document.body.appendChild(component())