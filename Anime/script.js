
    // Animaciones para las imágenes de los animes
    const animeImages = document.querySelectorAll('.top-mejor div');

    animeImages.forEach((anime) => {
        anime.addEventListener('mouseover', () => {
            anime.style.transform = 'scale(1.1)';
            anime.style.boxShadow = '0 0 20px rgba(255, 165, 0, 0.7)';
        });

        anime.addEventListener('mouseout', () => {
            anime.style.transform = 'scale(1)';
            anime.style.boxShadow = 'none';
        });

        anime.addEventListener('click', () => {
            anime.style.transition = 'transform 0.2s ease-in-out';
            anime.style.transform = 'scale(0.9)';
            setTimeout(() => {
                anime.style.transform = 'scale(1.1)';
            }, 200);
        });
    });


// Animación en los enlaces de las imágenes
const animeLinks = document.querySelectorAll('.top-mejor div a');

animeLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#f39c12';
        link.style.textShadow = '0 0 10px rgba(255, 165, 0, 0.7)';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '#ffffff';
        link.style.textShadow = 'none';
    });

    link.addEventListener('click', (e) => {
        e.preventDefault();
        link.style.transform = 'scale(0.9)';
        setTimeout(() => {
            window.location.href = link.href;
        }, 200);
    });
});
const hentaiLink = document.querySelector('.anime-hentai1 a');

hentaiLink.addEventListener('click', function(e) {
    e.preventDefault(); // Evita la redirección inmediata
    hentaiLink.style.transform = 'scale(1.1)';
    hentaiLink.style.boxShadow = '0 0 10px rgba(255, 165, 0, 0.7)';
    
    // Espera un poco antes de redirigir
    setTimeout(function() {
        window.location.href = hentaiLink.href;
    }, 500); // Ajusta el tiempo según sea necesario
});

