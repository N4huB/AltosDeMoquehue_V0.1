// Selección de imágenes de la galería y el modal
const imagenes = document.querySelectorAll('.gallery-img');
const modalImg = document.getElementById('imagenAmpliada');

// Evento de clic para cada imagen
imagenes.forEach(img => {
    img.addEventListener('click', () => {
        modalImg.setAttribute('src', img.src);
        new bootstrap.Modal(document.getElementById('imagenModal')).show();
    });
});

// Obtener el botón
let mybutton = document.getElementById("scrollToTopBtn");

// Mostrar el botón cuando el usuario baje más de 20px
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// Cuando el usuario haga clic, volver a la parte superior de la página
mybutton.onclick = function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
