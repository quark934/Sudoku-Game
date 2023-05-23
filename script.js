//DOM Selections


//Dark Mode

const darkModeButton = document.querySelector('#darkModeButton')
const lightModeButton = document.querySelector('#lightModeButton')

const levelButtons = document.querySelectorAll('#levelSelector')
const breakLines = document.querySelectorAll('#darkModeLines')

darkModeButton.addEventListener('click', darkMode)
lightModeButton.addEventListener('click', lightMode)

function darkMode () {
    document.body.style.backgroundColor = 'black'
    levelButtons.forEach(button => {
        button.classList.add('dark-mode-buttons')
    })
    breakLines.forEach(line => {
        line.classList.add('break-dark-mode')
    })
    darkModeButton.classList.add('moon-dark')
    lightModeButton.classList.remove('sun-light')
}

function lightMode () {
    document.body.style.backgroundColor = 'white'
    levelButtons.forEach(button => {
        button.classList.remove('dark-mode-buttons')
    })
    breakLines.forEach(line => {
        line.classList.remove('break-dark-mode')
    })
    lightModeButton.classList.add('sun-light')
    darkModeButton.classList.remove('moon-dark')
}

//Starter Puzzle Arrays

easyGameSetup = [
    '2-5--9--4',
    '------3-7',
    '7--856-1-',
    '45-7-----',
    '--9---1--',
    '-----2-85',
    '-2-418--6',
    '6-8------',
    '1--2--7-8'
]

medGameSetup = [
    '--6-9-2--',
    '---7-2---',
    '-9-5-8-7-',
    '9---3---6',
    '75-----19',
    '1---4---5',
    '-1-3-9-8-',
    '---2-1---',
    '--9-8-1--'
]

hardGameSetup = [
    '---8-----',
    '789-1---6',
    '-----61--',
    '--7----5-',
    '5-87-93-4',
    '-4----2--',
    '--32-----',
    '8---7-439',
    '-----1---'
]


//Solution Puzzle Arrays






//Gameboard Generation


//Gameboard Functionality



//Number Tile Functionality



//Game Solution Test Functionality



//Winner Declaration



//Level Select


