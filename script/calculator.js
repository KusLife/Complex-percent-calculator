const display = document.getElementById('display')
const displayResult = document.querySelector('.displayResult')
const keybard = document.getElementById('keybord')
const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '*', '/', '+', '-', '=', 'AC']
const btns = document.getElementsByClassName('keys');


displayResult.innerHTML = 'Calculated: '

// Getting all keys and set them to html
const keyList = keys.map((keyElement, index) => `<button class='keys' value='${keyElement}' index='${index}'>${keyElement}</button>`
)
keybard.innerHTML = keyList.join(' ')

// Button clear the calculation
const btnEqual = document.createElement('button')
btnEqual.classList.add('btnAC')
btnEqual.innerHTML = '='
// keybard.appendChild(btnEqual)

const btnAC = document.createElement('button')
btnAC.classList.add('btnAC')
btnAC.innerHTML = 'AC'
// keybard.appendChild(btnAC)

let arr = []
// Check what key is presed and pase data to calculetion
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {

        if (btns[i].value == 'AC') {
            // arr.push(btns[i].value)
            console.log('CLEAR ALL')
            arr = []
        }
        else if (btns[i].value == '=') {
            console.log(Math.abs(arr))
            displayResult.innerHTML = Math.abs(arr)
        } else {
            arr.push(btns[i].value)
            // arr.toString
            //  = parseInt(arr)
            

            // console.log(arr.join(' '))
            console.log(arr)
        }
    

        // switch (btns[i].value) {
        //     case '5': console.log('ahahaha')
        //     break;
        // }
    })
}
// console.log(arr, 'out')

function tappedBtn() {
    // btns.addEventListener('click', () =>  console.log('hooh'))
}
// tappedBtn()
// console.log(tappedBtn)
