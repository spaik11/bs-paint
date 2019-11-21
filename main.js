const currentBrush = document.querySelector('.current-brush');

function grabColor(element) {
    element.classList[1];
}

const squareColors = document.querySelectorAll('.square');

for (let i = 0; i < squareColors.length; i++) {
    squareColors[i] = squareColors[i].addEventListener('click', clickSquare);
}

const square = document.querySelector('.square');

function clickSquare(event) {
    event.target.classList.replace(grabColor(square), grabColor(currentBrush));
}

const paletteColors = document.querySelectorAll('.palette-color')

paletteColors[0].addEventListener('click', clickPalette)
paletteColors[1].addEventListener('click', clickPalette)
paletteColors[2].addEventListener('click', clickPalette)
paletteColors[3].addEventListener('click', clickPalette)
paletteColors[4].addEventListener('click', clickPalette)

// for (let i = 0; i < paletteColors.length; i++) {
//     paletteColors[i] = paletteColors[i].addEventListener('click', clickPalette);
// }

function clickPalette(event) {
    currentBrush.classList.replace(grabColor(currentBrush), grabColor(paletteColors[0]))
}





