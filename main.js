const currentBrush = document.querySelector('.current-brush');

function grabColor(element) {
    element.classList[1];
}

function clickSquare(event) {
    const squareColors = document.querySelectorAll('.square');

    for (let i = 0; i < squareColors.length; i++) {
        squareColors[i] = squareColors[i].addEventListener('click', clickSquare);
    }

    event.target.classList.replace(grabColor(square), grabColor(currentBrush));
}

function clickPalette() {
    const paletteColors = document.querySelectorAll('.palette-color');

    for (let i = 0; i < paletteColors.length; i++) {
        paletteColors[i] = paletteColors[i].addEventListener('click', clickPalette)
    }

    currentBrush.classList.replace(grabColor(currentBrush), grabColor())
}




