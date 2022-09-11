const header = document.querySelector('.header')
//==header
header.addEventListener('mouseover', () => {
    header.classList.remove('hidden')
})

header.addEventListener('mouseout', () => {
    header.classList.add('hidden')
})

//=======game

const board = document.querySelector('#board')
const colors = ['#2D572C', '#92000A', '#A73853', '#474389', '#9966CC', '#7BA05B', '#CED23A']
const SQUARES_NUMBER = 1000

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 15px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
   const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
