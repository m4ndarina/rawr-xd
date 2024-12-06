document.addEventListener("DOMContentLoaded", () => {

const musica= new Audio('assets/audio/see_in_your_fantasy.mp3');
musica.loop = true;
musica.volume = 0.25;

const dialogoTexto = document.getElementById("dialogo_texto");
const bloqueNombre = document.getElementById("bloque_nombre");
const spritePersonaje = document.getElementById("sprite_personaje");
const contenedorOpciones = document.getElementById("contenedor_opciones");
const opciones = [document.getElementById("opcion1"), document.getElementById("opcion2")];
const indicador = document.getElementById("indicador");

let dialogoIndex = 0;
let opcionSeleccionada = 0;
let seleccion = false;

const dialogos = [
    { nombre: "Ian", texto: "hola...", sprite: "assets/img/ian_5.png" },
    { nombre: "Ian", texto: "supongo que esto se te hará familiar, ¿no?", sprite: "assets/img/ian_5.png" },
    { nombre: "Ian", texto: "bienvenido a mi humilde hogar", sprite: "assets/img/ian_8.png" },
    { nombre: "Ian", texto: "humilde hogar que por supuesto NO es la casa de Basil, jeje", sprite: "assets/img/ian_3.png" },
    { nombre: "Ian", texto: "ya debes saber la razón por la que estamos aquí", sprite: "assets/img/ian_3.png" },
    { nombre: "Opción", texto: "¿Qué vas a responder?", opciones: [
        { texto: "SI", siguiente: 6 },
        { texto: "NO", siguiente: 7 },
    ] },
    { nombre: "Ian", texto: "pues nunca he sido buena manteniendo la boca cerrada cuando se trata de sorpresas", sprite: "assets/img/ian_10.png", siguiente: 8 },
    { nombre: "Ian", texto: "entonces creo haber sido lo suficientemente discreta", sprite: "assets/img/ian_6.png" },
    { nombre: "Ian", texto: "déjame explicarte cómo empezó todo", sprite: "assets/img/ian_2.png" },
    { nombre: "Ian", texto: "en una de mis muchas noches en las que no podía dormir", sprite: "assets/img/ian_4.png" },
    //10
    { nombre: "Ian", texto: "tuve una idea MILLONARIA", sprite: "assets/img/ian_2.png" },
    { nombre: "Ian", texto: "la idea que me iba a llevar a una vida llena de lujos", sprite: "assets/img/ian_6.png" },
    { nombre: "Ian", texto: "gastar dinero sin medida y comprarme el premium de albion con dinero real", sprite: "assets/img/ian_8.png" },
    { nombre: "Ian", texto: "y también tener una granja de conejos!!!!!!!!!!!!!!!!!!", sprite: "assets/img/ian_9.png" },
    { nombre: "Ian", texto: "...", sprite: "assets/img/ian_5.png" },
    { nombre: "Ian", texto: "bueno, realmente no", sprite: "assets/img/ian_3.png" },
    { nombre: "Ian", texto: "pero sí tuve una buena idea", sprite: "assets/img/ian_1.png" },
    { nombre: "Ian", texto: "pensé en que hace mucho no programaba", sprite: "assets/img/ian_2.png" },
    { nombre: "Ian", texto: "estuve en una gran pausa después del trauma de mi proyecto final...", sprite: "assets/img/ian_10.png" },
    { nombre: "Ian", texto: "y quería hacer algo productivo, ¿sabes?", sprite: "assets/img/ian_5.png" },
    //20
    { nombre: "Ian", texto: "sentirme útil y probarme a mi misma que no había olvidado las nociones de programar", sprite: "assets/img/ian_5.png" },
    { nombre: "Ian", texto: "así haya pasado los últimos dos años de mi vida programando, jeje", sprite: "assets/img/ian_6.png" },
    { nombre: "Ian", texto: "entonces esto...", sprite: "assets/img/ian_1.png" },
    { nombre: "Ian", texto: "se supone que era una especie de introducción", sprite: "assets/img/ian_2.png" },
    { nombre: "Ian", texto: "una introducción DEMASIADO elaborada.", sprite: "assets/img/ian_3.png" },
    { nombre: "Ian", texto: "para un pequeño proyecto que hice para ti", sprite: "assets/img/ian_8.png" },
    { nombre: "Ian", texto: "durante el tiempo que hemos estado juntos", sprite: "assets/img/ian_1.png" },
    { nombre: "Ian", texto: "he podido 'sondear' qué clase de regalos te gustan y cuáles no", sprite: "assets/img/ian_1.png" },
    { nombre: "Ian", texto: "y basándome en eso, preparé esto", sprite: "assets/img/ian_9.png" },
    { nombre: "Ian", texto: "es algo que me tomó bastante tiempo", sprite: "assets/img/ian_8.png" },
    //30
    { nombre: "Ian", texto: "empecé más o menos desde el 25 de noviembre", sprite: "assets/img/ian_5.png" },
    { nombre: "Ian", texto: "aunque, claro, si no fuera una persona tan perfeccionista me hubiera tardado mucho menos...", sprite: "assets/img/ian_3.png" },
    { nombre: "Ian", texto: "pero tú te mereces sólo lo mejor", sprite: "assets/img/ian_8.png" },
    { nombre: "Ian", texto: "aparte este proyecto me ayudó positivamente", sprite: "assets/img/ian_8.png" },
    { nombre: "Ian", texto: "pude mantener mi mente ocupada y aprendí muchas cosas", sprite: "assets/img/ian_8.png" },
    { nombre: "Ian", texto: "porque tuve que ver MUCHOS tutoriales... y buscar muchas cosas...", sprite: "assets/img/ian_5.png" },
    { nombre: "Ian", texto: "sabrás a lo que me refiero después.", sprite: "assets/img/ian_6.png" },
    { nombre: "Ian", texto: "en fin... ¿qué opinas?", sprite: "assets/img/ian_1.png" },
    { nombre: "Opción", texto: "¿Qué vas a responder?", opciones: [
        { texto: "Y A MI QUÉ", siguiente: 39 },
        { texto: "GRACIAS", siguiente: 40 },
    ] },
    { nombre: "Ian", texto: "chingomireputamadre", sprite: "assets/img/ian_10.png", siguiente: 41 },
    //40
    { nombre: "Ian", texto: "de nada, mi amor", sprite: "assets/img/ian_9.png" },
    { nombre: "Ian", texto: "de todos modos", sprite: "assets/img/ian_2.png" },
    { nombre: "Ian", texto: "hoy estamos conmemorando...", sprite: "assets/img/ian_2.png" },
    { nombre: "Ian", texto: "nada en específico, en realidad", sprite: "assets/img/ian_1.png" },
    { nombre: "Ian", texto: "pero diría que estamos celebrando meramente el hecho de que existes", sprite: "assets/img/ian_8.png" },
    { nombre: "Ian", texto: "porque de por si, tu existencia ya hace mis días más especiales", sprite: "assets/img/ian_9.png" },
    { nombre: "Ian", texto: "también quería que supieras", sprite: "assets/img/ian_5.png" },
    { nombre: "Ian", texto: "que nunca dejé de trabajar en esto", sprite: "assets/img/ian_5.png" },
    { nombre: "Ian", texto: "incluso si estaba molesta", sprite: "assets/img/ian_5.png" },
    { nombre: "Ian", texto: "y también cuando te dije que necesitaba un tiempo", sprite: "assets/img/ian_5.png" },
    //50
    { nombre: "Ian", texto: "lo que quiero decir...", sprite: "assets/img/ian_2.png" },
    { nombre: "Ian", texto: "es que independientemente de nuestra situación", sprite: "assets/img/ian_1.png" },
    { nombre: "Ian", texto: "siempre te tengo presente", sprite: "assets/img/ian_8.png" },
    { nombre: "Ian", texto: "nada me haría dejar de amarte, lo prometo", sprite: "assets/img/ian_9.png" },
    { nombre: "Ian", texto: "en fin", sprite: "assets/img/ian_1.png" },
    { nombre: "Ian", texto: "te dejo en paz ya para que veas lo demás!!", sprite: "assets/img/ian_8.png" },
    { nombre: "Ian", texto: "te amo", sprite: "assets/img/ian_9.png" },
];

function actualizarDialogo() {
    const dialogo = dialogos[dialogoIndex];
    const indicadorEstatico = document.getElementById("indicador_estatico");
    bloqueNombre.textContent = dialogo.nombre;
    dialogoTexto.textContent = dialogo.texto;
    spritePersonaje.src = dialogo.sprite;

    if (dialogo.opciones) {
        mostrarOpciones(dialogo.opciones);
        indicadorEstatico.style.display = "none";
    } else {
        ocultarOpciones();
        indicadorEstatico.style.display = "block";
    }
}

function mostrarOpciones(opcionesDialogo) {
    seleccion = true;
    bloqueNombre.style.display = "none";
    contenedorOpciones.style.display = "block";
    document.getElementById("sprite_wrapper").style.display = "none";

    opciones.forEach((opcion, index) => {
        if (opcionesDialogo[index]) {
            opcion.textContent = opcionesDialogo[index].texto;
            opcion.dataset.siguiente = opcionesDialogo[index].siguiente;
            opcion.style.display = "block";
        } else {
            opcion.style.display = "none";
        }
    });

    moverIndicador(0);
}

function ocultarOpciones() {
    seleccion = false;
    contenedorOpciones.style.display = "none";
    document.getElementById("sprite_wrapper").style.display = "block";
}

function moverIndicador(direccion) {
    const maxOpciones = opciones.filter(opcion => opcion.style.display !== "none").length;
    opcionSeleccionada = (opcionSeleccionada + direccion + maxOpciones) % maxOpciones;

    const opcionActiva = opciones[opcionSeleccionada];
    const opcionOffsetTop = opcionActiva.offsetTop;
    const ajusteY = 18;
    indicador.style.top = `${opcionOffsetTop + ajusteY}px`;
}

function confirmarSeleccion() {
    const opcion = opciones[opcionSeleccionada];
    dialogoIndex = parseInt(opcion.dataset.siguiente, 10);
    bloqueNombre.style.display = "block";
    actualizarDialogo();
}

document.addEventListener("keydown", (event) => {
    if (seleccion) {
        if (event.key === "ArrowUp") {
            moverIndicador(-1);
        } else if (event.key === "ArrowDown") {
            moverIndicador(1);
        } else if (event.key === "z") {
            confirmarSeleccion();
        }
    } else {
        if (event.key === "x") {
            musica.play()
            const dialogo = dialogos[dialogoIndex];
            if (dialogo.siguiente !== undefined) {
                dialogoIndex = dialogo.siguiente;
            } else {
                dialogoIndex++;
            }
            if (dialogoIndex >= dialogos.length) {
                window.location.href = "principal.html";
                return;
            }
            actualizarDialogo();
        }
    }
});

actualizarDialogo();
});
