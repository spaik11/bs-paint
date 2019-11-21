const currentBrush = document.querySelector('.current-brush');

function grabColor(element) {
    return element.classList[1];
}

const squareColors = document.querySelectorAll('.square');

for (let i = 0; i < squareColors.length; i++) {
    squareColors[i].addEventListener('click', clickSquare);
}

const square = document.querySelector('.square');

function clickSquare(event) {
    console.log(event.target.classList[1])
    event.target.classList.replace(grabColor(event.target), grabColor(currentBrush));
}

const paletteColors = document.querySelectorAll('.palette-color')

for (let i = 0; i < paletteColors.length; i++) {
    paletteColors[i].addEventListener('click', clickPalette);
}

function clickPalette(event) {
    currentBrush.classList.replace(grabColor(currentBrush), grabColor(event.target))
}





