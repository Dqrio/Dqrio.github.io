// Variables de control
let timeoutIds = [];
let mouseInsideNoBtn = false;

document.getElementById('noBtn').addEventListener('mouseenter', function() {
    mouseInsideNoBtn = true;
    moveNoButton(); // Mueve el botón "No" a una posición aleatoria
    growYesButton(0, 1); // Comienza el crecimiento del botón "Sí"
});

document.getElementById('noBtn').addEventListener('mouseleave', function() {
    mouseInsideNoBtn = false;
});

function moveNoButton() {
    let noBtn = document.getElementById('noBtn');
    let container = document.querySelector('.container');
    
    // Calcula la posición máxima dentro del contenedor
    let posX = Math.random() * (container.offsetWidth - noBtn.offsetWidth);
    let posY = Math.random() * (container.offsetHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = posX + 'px';
    noBtn.style.top = posY + 'px';
}

function growYesButton(currentTime, growthFactor) {
    if (!mouseInsideNoBtn || currentTime >= 10) {
        return;
    }

    let siBtn = document.getElementById('siBtn');
    let initialWidth = siBtn.offsetWidth;
    let initialHeight = siBtn.offsetHeight;
    let initialFontSize = parseFloat(window.getComputedStyle(siBtn).fontSize);

    siBtn.style.transition = 'width 0.5s, height 0.5s, font-size 0.5s';
    siBtn.style.width = (initialWidth * growthFactor) + 'px';
    siBtn.style.height = (initialHeight * growthFactor) + 'px';
    siBtn.style.fontSize = (initialFontSize * growthFactor) + 'px';

    setTimeout(function() {
        growYesButton(currentTime + 2, growthFactor + 0.1); // Aumenta el tamaño del botón "Sí" cada 2 segundos
    }, 1000);
}

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar los botones y la pregunta
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje de redirección
    document.getElementById('messageContainer').style.display = 'block';
});
