// Reloj
let minutos = 90;
let segundos = 0;
const reloj = document.getElementById('reloj-partido');

setInterval(() => {
    segundos++;
    if (segundos === 60) { minutos++; segundos = 0; }
    reloj.innerText = `${minutos}:${segundos < 10 ? '0' + segundos : segundos}+`;
}, 1000);

// Botón Principal
const boton = document.getElementById('btnInteractivo');
const resultado = document.getElementById('resultado');
const fondoRayado = document.getElementById('bg');

boton.addEventListener('click', function() {
    resultado.classList.remove('hidden');
    boton.style.display = 'none';
    document.body.style.backgroundColor = "#edbb00"; 
    fondoRayado.style.opacity = "0.1"; 
    setTimeout(() => { alert("¡CAMPEONES DE NUESTRO AMOR! ❤️💙"); }, 500);
});

// Lógica del VAR (Idea 1)
const btnVar = document.getElementById('btnVar');
const varMensaje = document.getElementById('varMensaje');

btnVar.addEventListener('click', function() {
    btnVar.innerText = "REVISANDO...";
    setTimeout(() => {
        btnVar.style.display = 'none';
        varMensaje.classList.remove('hidden');
    }, 1500);
});
