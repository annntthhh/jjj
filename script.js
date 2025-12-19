// Abrir túnel
document.getElementById('btnSaltarCampo').addEventListener('click', function() {
    document.getElementById('tunel').style.transform = 'translateY(-100%)';
});

// Reloj
let minutos = 90; let segundos = 0;
setInterval(() => {
    segundos++;
    if (segundos === 60) { minutos++; segundos = 0; }
    document.getElementById('reloj-partido').innerText = `${minutos}:${segundos < 10 ? '0' + segundos : segundos}+`;
}, 1000);

// Contador dinámico (Solo Amor)
function animarAmor() {
    let obj = document.getElementById("countAmor");
    let valor = 0;
    let tiempo = setInterval(() => {
        valor++;
        obj.innerText = valor;
        if (valor === 10) clearInterval(tiempo);
    }, 150);
}

// Botón Principal
const boton = document.getElementById('btnInteractivo');
boton.addEventListener('click', function() {
    document.getElementById('resultado').classList.remove('hidden');
    boton.style.display = 'none';
    animarAmor();
    
    // Confeti
    for (let i = 0; i < 50; i++) {
        const confeti = document.createElement('div');
        confeti.style.position = 'fixed';
        confeti.style.width = '10px'; confeti.style.height = '10px';
        confeti.style.backgroundColor = Math.random() > 0.5 ? '#004d98' : '#a50044';
        confeti.style.left = Math.random() * 100 + 'vw';
        confeti.style.top = '-10px';
        confeti.style.zIndex = '1000';
        confeti.style.transition = 'transform 3s linear, opacity 3s';
        document.body.appendChild(confeti);
        setTimeout(() => {
            confeti.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
            confeti.style.opacity = '0';
        }, 10);
        setTimeout(() => confeti.remove(), 3000);
    }

    setTimeout(() => {
        document.getElementById('bg').style.opacity = "0.1";
        document.body.style.backgroundColor = "#edbb00";
        document.getElementById('notificacion').classList.remove('hidden-notif');
    }, 600);
});

// VAR
const btnVar = document.getElementById('btnVar');
btnVar.addEventListener('click', function() {
    btnVar.innerText = "REVISANDO...";
    setTimeout(() => {
        btnVar.style.display = 'none';
        document.getElementById('varMensaje').classList.remove('hidden');
    }, 1500);
});
