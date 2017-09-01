import _ from 'lodash'
import './style.css'

function component() {
    var ele = document.createElement('div')

    ele.innerHTML = _.join(['Hello', 'webpack!'])
    ele.classList.add('hello')

    return ele
}

document.body.appendChild(component())