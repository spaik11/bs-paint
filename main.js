const currentBrush = document.querySelector('.current-brush');

function grabColor(element) {
    element.classList[1];
}

function clickSquare(event) {
    event.target.classList.replace(grabColor(square), grabColor(currentBrush));
}

function clickPalette() {
    currentBrush.classList.replace(grabColor(currentBrush), grabColor());
}

const paletteColors = document.querySelectorAll('.palette-color');

for (let i = 0; i < paletteColors.length; i++) {
    paletteColors[i] = paletteColors[i].addEventListener('click', )
}