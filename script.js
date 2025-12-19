const boton = document.getElementById('btnInteractivo');
const resultado = document.getElementById('resultado');

boton.addEventListener('click', function() {
    // Muestra el texto oculto
    resultado.classList.remove('hidden');
    // Esconde el botón para que se vea el resultado final
    boton.style.display = 'none';
});
