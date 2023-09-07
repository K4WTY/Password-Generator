const range = document.getElementById('range')
const rangeValue = document.getElementById('rangeValue')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const retangle1 = document.getElementById('retangle-1')
const retangle2 = document.getElementById('retangle-2')
const retangle3 = document.getElementById('retangle-3')
const retangle4 = document.getElementById('retangle-4')
const difficulty = document.getElementById('difficulty')
const passwordInput = document.getElementById('password')
const generate = document.getElementById('generate')

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbersLetters = '1234567890'
const symbolsLetters = '!@#$%&()'

// alert(uppercaseLetters.length)

let security

let arraySecurity = [
    0,
    0,
    0,
    0
]

function changeBgColor(target, color) {
    target.style.backgroundColor = color
}

function checkbox() {
    if (this.checked) {
        if (this.id == 'uppercase') {
            arraySecurity[0] = 1
        } else if (this.id == 'lowercase') {
            arraySecurity[1] = 1
        } else if (this.id == 'numbers') {
            arraySecurity[2] = 1
        } else if (this.id == 'symbols') {
            arraySecurity[3] = 1
        }
    } else {
        if (this.id == 'uppercase') {
            arraySecurity[0] = 0
        } else if (this.id == 'lowercase') {
            arraySecurity[1] = 0
        } else if (this.id == 'numbers') {
            arraySecurity[2] = 0
        } else if (this.id == 'symbols') {
            arraySecurity[3] = 0
        }
    }

    security = 0

    for(let i = 0; i < arraySecurity.length; i++) {
        if(arraySecurity[i] == 1) {
            security++
        }
    }

    switch(security) {
        case 0:
            changeBgColor(retangle1, '#14131A')
            changeBgColor(retangle2, '#14131A')
            changeBgColor(retangle3, '#14131A')
            changeBgColor(retangle4, '#14131A')
            difficulty.innerHTML = 'EASY'
        break
        case 1:
            changeBgColor(retangle1, 'red')
            changeBgColor(retangle2, '#14131A')
            changeBgColor(retangle3, '#14131A')
            changeBgColor(retangle4, '#14131A')
            difficulty.innerHTML = 'EASY'
        break
        case 2:
            changeBgColor(retangle1, 'red')
            changeBgColor(retangle2, 'yellow')
            changeBgColor(retangle3, '#14131A')
            changeBgColor(retangle4, '#14131A')
            difficulty.innerHTML = 'EASY'
        break
        case 3:
            changeBgColor(retangle1, 'red')
            changeBgColor(retangle2, 'yellow')
            changeBgColor(retangle3, 'yellow')
            changeBgColor(retangle4, '#14131A')
            difficulty.innerHTML = 'MEDIUM'
        break
        case 4:
            changeBgColor(retangle1, '#005CC8')
            changeBgColor(retangle2, '#005CC8')
            changeBgColor(retangle3, '#005CC8')
            changeBgColor(retangle4, '#005CC8')
            difficulty.innerHTML = 'HARD'
        break
        default:
        alert('Erro')
    }

    //alert(security)
}

function generatePassword() {

    let securityVariables = {
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false
    }

    if (uppercase.checked) {
        securityVariables.uppercase = true
    } else {
        securityVariables.uppercase = false
    }

    if (lowercase.checked) {
        securityVariables.lowercase = true
    } else {
        securityVariables.lowercase = false
    }

    if (numbers.checked) {
        securityVariables.numbers = true
    } else {
        securityVariables.numbers = false
    }
    
    if (symbols.checked) {
        securityVariables.symbols = true
    } else {
        securityVariables.symbols = false
    }

    let password = ''

    for (let i = 0; i < rangeValue.innerHTML; i++) {
        for (let index in securityVariables) {
            if (securityVariables[index]) {
                if (securityVariables[index] == securityVariables.uppercase) {
                    password += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
                }
                if (securityVariables[index] == securityVariables.lowercase) {
                    password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
                }
                if (securityVariables[index] == securityVariables.numbers) {
                    password += numbersLetters[Math.floor(Math.random() * numbersLetters.length)]
                }
                if (securityVariables[index] == securityVariables.symbols) {
                    password += symbolsLetters[Math.floor(Math.random() * symbolsLetters.length)]
                }
            }
        }
    }

    passwordInput.value = password.substr(0, rangeValue.innerHTML)

    // alert(securityVariables.uppercase)
    // alert(securityVariables.lowercase)
    // alert(securityVariables.numbers)
    // alert(securityVariables.symbols)
}

range.addEventListener('change', function() {
    rangeValue.innerHTML = this.value
})

uppercase.addEventListener('change', checkbox)
lowercase.addEventListener('change', checkbox)
numbers.addEventListener('change', checkbox)
symbols.addEventListener('change', checkbox)

generate.addEventListener('click', function(){
    if (security == 0 || security == null) {
        alert('Choose any level of security')
        return
    }

    if (rangeValue.innerHTML == 0) {
        alert('Choose the length of password')
        return
    }

    generatePassword()
})