document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let counter = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');
    const cambiarContenidoBtn = document.getElementById('cambiarContenido');
    const cambiarColorBtn = document.getElementById('cambiarColor');
    const textoElement = document.getElementById('texto');

    // Función para mover el carrusel automáticamente
    function moveCarousel() {
        if (counter < carouselItems.length - 1) {
            counter++;
        } else {
            counter = 0;
        }
        carousel.style.transform = `translateX(-${counter * 100}%)`;
    }

    // Intervalo para mover el carrusel cada 3 segundos
    setInterval(moveCarousel, 3000);

    // Cambiar contenido del texto al hacer clic en el botón "Cambiar Contenido"
    cambiarContenidoBtn.addEventListener('click', function() {
        textoElement.innerText = 'Nuevo contenido de texto.';
    });

    // Cambiar color de fondo de la página al hacer clic en el botón "Cambiar Color de Página"
    cambiarColorBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = 'yellow';
    });
});
