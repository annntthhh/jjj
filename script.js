const boton = document.getElementById('btnInteractivo');
const resultado = document.getElementById('resultado');
const fondoRayado = document.getElementById('bg');

boton.addEventListener('click', function() {
    // 1. Mostrar el resultado
    resultado.classList.remove('hidden');
    
    // 2. Esconder el botón
    boton.style.display = 'none';
    
    // 3. Efecto de victoria en el fondo
    document.body.style.backgroundColor = "#edbb00"; // Color Dorado
    fondoRayado.style.opacity = "0.1"; // Atenuar las rayas
    
    // 4. Mensaje de alerta (Sorpresa)
    setTimeout(() => {
        alert("¡CAMPEONES DE NUESTRO AMOR! ❤️💙");
    }, 500);
});
