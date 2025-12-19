// Lógica del Reloj (Idea 3)
let minutos = 90;
let segundos = 0;
const reloj = document.getElementById('reloj-partido');

setInterval(() => {
    segundos++;
    if (segundos === 60) {
        minutos++;
        segundos = 0;
    }
    reloj.innerText = `${minutos}:${segundos < 10 ? '0' + segundos : segundos}+`;
}, 1000);

// Lógica del Botón y sorpresas
const boton = document.getElementById('btnInteractivo');
const resultado = document.getElementById('resultado');
const fondoRayado = document.getElementById('bg');

boton.addEventListener('click', function() {
    // Mostrar el resultado
    resultado.classList.remove('hidden');
    
    // Esconder el botón
    boton.style.display = 'none';
    
    // Efecto de victoria en el fondo
    document.body.style.backgroundColor = "#edbb00"; 
    fondoRayado.style.opacity = "0.1"; 
    
    // Mensaje de alerta
    setTimeout(() => {
        alert("¡CAMPEONES DE NUESTRO AMOR! ❤️💙");
    }, 500);
});
