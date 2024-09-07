
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
