// Obtener elementos del DOM
const logo = document.querySelector('.logo');
const btnDownloadCV = document.querySelector('.btn');
const contactIcons = document.querySelectorAll('#contact-links img');




// Agregar eventos de movimiento al botón de descarga del CV
btnDownloadCV.addEventListener('mouseover', function() {
  btnDownloadCV.classList.add('scale');
});

btnDownloadCV.addEventListener('mouseout', function() {
  btnDownloadCV.classList.remove('scale');
});


// Agregar eventos de movimiento al menú "Inicio"
menuInicio.addEventListener('mouseover', function() {
  menuInicio.classList.add('hover');
});

menuInicio.addEventListener('mouseout', function() {
  menuInicio.classList.remove('hover');
});


// Agregar eventos de movimiento al menú "Contacto"
menuContacto.addEventListener('mouseover', function() {
  menuContacto.classList.add('hover');
});

menuContacto.addEventListener('mouseout', function() {
  menuContacto.classList.remove('hover');
});
