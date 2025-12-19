const boton = document.getElementById('btnInteractivo');
const resultado = document.getElementById('resultado');
const fondoRayado = document.getElementById('bg');

boton.addEventListener('click', function() {
    // Mostramos el resultado con animación
    resultado.classList.remove('hidden');
    
    // Ocultamos el botón
    boton.style.display = 'none';
    
    // Efecto de victoria: El fondo se vuelve dorado y las rayas se desvanecen un poco
    document.body.style.backgroundColor = "#edbb00";
    fondoRayado.style.opacity = "0.2";
    
    // Un pequeño mensaje de consola como "huevo de pascua"
    console.log("¡Visca el Barça! ❤️💙");
});
