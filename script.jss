const boton = document.getElementById('btnInteractivo');
const resultado = document.getElementById('resultado');

boton.addEventListener('click', () => {
    // Al hacer clic, mostramos el mensaje y ocultamos el botón
    resultado.classList.remove('hidden');
    boton.style.display = 'none';
});
