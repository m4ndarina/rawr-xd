const botonVolver = document.querySelector("#boton_volver");
const botonAvanzar = document.querySelector("#boton_avanzar");
const album = document.querySelector("#album");

const hoja1 = document.querySelector("#h1");
const hoja2 = document.querySelector("#h2");
const hoja3 = document.querySelector("#h3");

botonVolver.addEventListener("click", retrocederPagina);
botonAvanzar.addEventListener("click", avanzarPagina);

let albumIndex = 1;
let numHojas = 4;
let indexMaximo = numHojas + 1;

function abrirAlbum() {
    album.style.transform = "translateX(50%)";
    botonVolver.style.transform = "translateX(-320px)";
    botonAvanzar.style.transform = "translateX(320px)";
}

function cerrarAlbum(inicio) {
    if(inicio) {
        album.style.transform = "translateX(0%)";
    } else {
        album.style.transform = "translateX(100%)";
    }
    
    botonVolver.style.transform = "translateX(0px)";
    botonAvanzar.style.transform = "translateX(0px)";
}

function avanzarPagina() {
    if(albumIndex < indexMaximo) {
        switch(albumIndex) {
            case 1:
                abrirAlbum();
                hoja1.classList.add("voltear");
                hoja1.style.zIndex = 1;
                break;
            case 2:
                hoja2.classList.add("voltear");
                hoja2.style.zIndex = 2;
                break;
            case 3:
                hoja3.classList.add("voltear");
                hoja3.style.zIndex = 3;
                cerrarAlbum(false);
                break;
            default:
                throw new Error("Estado desconocido");
        }
        albumIndex++;
    }
}

function retrocederPagina() {
    if(albumIndex > 1) {
        switch(albumIndex) {
            case 2:
                cerrarAlbum(true);
                hoja1.classList.remove("voltear");
                hoja1.style.zIndex = 3;
                break;
            case 3:
                hoja2.classList.remove("voltear");
                hoja2.style.zIndex = 2;
                break;
            case 4:
                abrirAlbum();
                hoja3.classList.remove("voltear");
                hoja3.style.zIndex = 1;
                break;
            default:
                throw new Error("Estado desconocido");
        }

        albumIndex--;
    }
}