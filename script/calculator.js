const display = document.getElementById('display')
const displayResult = document.querySelector('.displayResult')
const keybard = document.getElementById('keybord')
const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '*', '/', '+', '-', '=']

keybard.innerHTML = 'bu'
displayResult.innerHTML = 'go'

const btnKyes = keys.map(keyElement => {
    return `<button >${keyElement}</button>`
})

keybard.appendChild(btnKyes)