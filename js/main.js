const convert = [document.querySelector('#convert-From'), document.querySelector('#convert-To')]
const convertText = document.querySelector('.convertText')
const result = document.querySelector('span')
const resultBtn = document.querySelector('button.resultBtn')
let convertFromSelectedIndex
let convertToSelectedIndex

//Nie przeładowywanie się strony po zatwierdzeniu formularza
document.querySelector('form').addEventListener('submit', function () {
    event.preventDefault()
})

//Aktualizacja aktualnego systemu z którego konwertujemy
function upgradeSelectedIndexFROM() {
    convertFromSelectedIndex = convert[0].options[convert[0].selectedIndex].value
}
setInterval(upgradeSelectedIndexFROM, 0)


//Aktualizacja aktualnego systemu do którego konwerujemy
function upgradeSelectedIndexTO() {
    convertToSelectedIndex = convert[1].options[convert[1].selectedIndex].value
}
setInterval(upgradeSelectedIndexTO, 0)


//Zmiana tekstu wewnątrz placeholder
function checkConvert() {
    if (convertFromSelectedIndex == 'default') {
        convertText.placeholder = 'Wybierz system liczbowy'
    } else if (convertFromSelectedIndex == 'binary') {
        convertText.placeholder = 'Liczba w systemie binarnym'
    } else if (convertFromSelectedIndex == 'octal') {
        convertText.placeholder = 'Liczba w systemie ósemkowym'
    } else if (convertFromSelectedIndex == 'decimal') {
        convertText.placeholder = 'Liczba w systemie dziesiętnym'
    } else if (convertFromSelectedIndex == 'hexadecimal') {
        convertText.placeholder = 'Liczba w systemie szesnastkowym'
    }
}
setInterval(checkConvert, 0)

//Wynik z systemu binarnego
function convertBinaryResult() {
    if (convertFromSelectedIndex == 'binary' && convertToSelectedIndex == 'octal') {
        result.textContent = parseInt(convertText.value, 2).toString(8)
    } else if (convertFromSelectedIndex == 'binary' && convertToSelectedIndex == 'decimal') {
        result.textContent = parseInt(convertText.value, 2)
    } else if (convertFromSelectedIndex == 'binary' && convertToSelectedIndex == 'hexadecimal') {
        result.textContent = parseInt(convertText.value, 2).toString(16)
    }
}
resultBtn.addEventListener('click', convertBinaryResult)

//Wynik z systemu ósemkowego
function convertOctalResult() {
    if (convertFromSelectedIndex == 'octal' && convertToSelectedIndex == 'binary') {
        result.textContent = parseInt(convertText.value, 8).toString(2)
    } else if (convertFromSelectedIndex == 'octal' && convertToSelectedIndex == 'decimal') {
        result.textContent = parseInt(convertText.value, 8)
    } else if (convertFromSelectedIndex == 'octal' && convertToSelectedIndex == 'hexadecimal') {
        result.textContent = parseInt(convertText.value, 8).toString(16)
    }
}
resultBtn.addEventListener('click', convertOctalResult)

//Wynik z systemu dziesiętnego
function convertDecimalResult() {
    if (convertFromSelectedIndex == 'decimal' && convertToSelectedIndex == 'binary') {
        result.textContent = parseInt(convertText.value, 10).toString(2)
    } else if (convertFromSelectedIndex == 'decimal' && convertToSelectedIndex == 'octal') {
        result.textContent = parseInt(convertText.value, 10).toString(8)
    } else if (convertFromSelectedIndex == 'decimal' && convertToSelectedIndex == 'hexadecimal') {
        result.textContent = parseInt(convertText.value, 10).toString(16)
    }
}
resultBtn.addEventListener('click', convertDecimalResult)

//Wynik z systemu szesnastkowego
function convertHexadecimalResult() {
    if (convertFromSelectedIndex == 'hexadecimal' && convertToSelectedIndex == 'binary') {
        result.textContent = parseInt(convertText.value, 16).toString(2)
    } else if (convertFromSelectedIndex == 'hexadecimal' && convertToSelectedIndex == 'octal') {
        result.textContent = parseInt(convertText.value, 16).toString(8)
    } else if (convertFromSelectedIndex == 'hexadecimal' && convertToSelectedIndex == 'decimal') {
        result.textContent = parseInt(convertText.value, 16)
    }
}
resultBtn.addEventListener('click', convertHexadecimalResult)


function delateOptions() {
    if (convertFromSelectedIndex == 'binary') {
        document.querySelector('.binary').style.display = 'none'
    } else {
        document.querySelector('.binary').style.display = 'block'
    }
    if (convertFromSelectedIndex == 'octal') {
        document.querySelector('.octal').style.display = 'none'
    } else {
        document.querySelector('.octal').style.display = 'block'
    }
    if (convertFromSelectedIndex == 'decimal') {
        document.querySelector('.decimal').style.display = 'none'
    } else {
        document.querySelector('.decimal').style.display = 'block'
    }
    if (convertFromSelectedIndex == 'hexadecimal') {
        document.querySelector('.hexadecimal').style.display = 'none'
    } else {
        document.querySelector('.hexadecimal').style.display = 'block'
    }

}

setInterval(delateOptions, 0)


//Zastrzeżone znaki do danych systemów liczbowych
const regBinary = new RegExp('[2-9]|[a-z]', 'g')
const regOctal = new RegExp('9|[a-z]', 'g')
const regDecimal = new RegExp('[a-z]', 'g')
const regHexadecimal = new RegExp('[g-z]', 'g')

//Niedozwolone znaki
function inavlidCharacters() {
    if (convertFromSelectedIndex == 'binary' && regBinary.test(convertText.value)) {
        alert('Niepoprawne znaki. Tylko 0 i 1.')
        result.textContent = 'Wprowadź poprawne znaki'
        convertText.value = ''
    }
    if (convertFromSelectedIndex == 'octal' && regOctal.test(convertText.value)) {
        alert('Niepoprawne znaki.')
        result.textContent = 'Wprowadź poprawne znaki'
        convertText.value = ''
    }
    if (convertFromSelectedIndex == 'decimal' && regDecimal.test(convertText.value)) {
        alert('Niepoprawne znaki.')
        result.textContent = 'Wprowadź poprawne znaki'
        convertText.value = ''
    }
    if (convertFromSelectedIndex == 'hexadecimal' && regHexadecimal.test(convertText.value)) {
        alert('Niepoprawne znaki.')
        result.textContent = 'Wprowadź poprawne znaki'
        convertText.value = ''
    }
    if (result.textContent == 'NaN') {
        result.textContent = ''
    }

}

resultBtn.addEventListener('click', inavlidCharacters)


//Refresh 
const btnRefresh = document.querySelector('.refreshBtn')

function refreshSite() {
    result.textContent = ''
    convertText.value = ''
    convert[0].options[convert[0].selectedIndex = 'default']
    convert[1].options[convert[1].selectedIndex = 'default']
}

btnRefresh.addEventListener('click', refreshSite)


//Usunięcie paragafu

const pHello = document.querySelector('.hello')

function delateParagraph() {
    pHello.style.display = 'none'
}

setTimeout(delateParagraph, 1000)