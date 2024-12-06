function actualizarHora(zona, id) {
    const opciones = { 
        timeZone: zona, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false
    };

    const hora = new Intl.DateTimeFormat('es-ES', opciones).format(new Date());

    document.getElementById(id).textContent = hora;

}

setInterval(() => {
    actualizarHora('America/Mexico_City', 'horaMexico');
    actualizarHora('America/Bogota', 'horaColombia');
}, 1000);

// espacio aquí jeje 
// gabriel tosió

document.addEventListener("DOMContentLoaded", function() {
const fechaAniversario = new Date("2024-04-16");

function calcularTiempo() {
    const fechaActual = new Date();
    const diferenciaTiempo = fechaActual - fechaAniversario;

    const dias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenciaTiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenciaTiempo % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenciaTiempo % (1000 * 60)) / 1000);

    contador.innerHTML = 
            `Han pasado <span style="font-weight: bold;">${dias}</span> días, <span style="font-weight: bold;">${horas}</span> horas, 
            <span style="font-weight: bold;">${minutos}</span> minutos y <span style="font-weight: bold;">${segundos}
            </span> segundos desde que empezamos a salir.`;
    }

calcularTiempo();

setInterval(calcularTiempo, 1000);

// espacio jeje dos. 

const musica = new Audio('assets/audio/principal.mp3');
musica.loop = true;
musica.volume = 0.25;

document.body.addEventListener('click', () => {
    musica.play()
});

});