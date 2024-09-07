// Puedes añadir JavaScript aquí si es necesario

window.addEventListener('load', function() {
    console.log('Página cargada.');
    // Puedes agregar más funcionalidades si es necesario
});


// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los enlaces que tienen un href que comienza con #
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    // Añade un evento click a cada enlace
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el comportamiento por defecto del enlace

            // Obtén el objetivo del enlace (la sección a la que se debe desplazar)
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Si el elemento objetivo existe, desplázate hacia él
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
