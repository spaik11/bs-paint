const currentBrush = document.querySelector('.current-brush');

function grabColor(element) {
    return element.classList[1];
}

const squareColors = document.querySelectorAll('.square');

for (let i = 0; i < squareColors.length; i++) {
    squareColors[i].addEventListener('click', clickSquare);
}

function clickSquare(event) {
    event.target.classList.replace(grabColor(event.target), grabColor(currentBrush));
}

const paletteColors = document.querySelectorAll('.palette-color')

for (let i = 0; i < paletteColors.length; i++) {
    paletteColors[i].addEventListener('click', clickPalette);
}

function clickPalette(event) {
    currentBrush.classList.replace(grabColor(currentBrush), grabColor(event.target))
}

const addSquare = document.createElement('div');
addSquare.classList.add('square');
addSquare.classList.add('color-5');

const addCanvas = document.querySelector('.canvas');
addCanvas.appendChild(addSquare)


