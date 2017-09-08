import _ from 'lodash'
import './style.css'

function component() {
    var ele = document.createElement('div')
    var button = document.createElement('button')
    var br = document.createElement('br')

    button.innerHTML = 'click me and look at the console!'
    ele.innerHTML = _.join(['Hello', 'webpack!'])
    ele.classList.add('hello')

    ele.appendChild(br)
    ele.appendChild(button)

    button.onclick = (e) => import('./print.js').then(module => {
        var print = module.default

        print()
    })

    return ele
}

document.body.appendChild(component())