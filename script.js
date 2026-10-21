const circulo = document.querySelector("#circulo-resp");
const guia = document.querySelector("#guia");
const boton = document.querySelector("#boton-inicio");

const fases = [
    {fase:"Inhala", duracion:4000, inflado: true},
    {fase:"Sostén", duracion:4000, inflado: true},
    {fase:"Exhala", duracion:4000, inflado: false},
    {fase:"Sostén", duracion:4000, inflado: false},
];

let faseActual = 0;
let idTemp = null;

function cambiarFase(i) {
    guia.textContent = fases[i].fase;
    circulo.classList.toggle("inflado", fases[i].inflado);
    console.log(fases[i].fase);
}

function respiracion() {
    cambiarFase(faseActual);
    const espera = fases[faseActual].duracion;
    faseActual = (faseActual + 1) % fases.length;
    idTemp = setTimeout(respiracion, espera);
}

function iniciarDtener() {
    if(idTemp === null){
        boton.textContent = "Parar";
        respiracion();
    } else {
        boton.textContent = "Respirar";
        clearTimeout(idTemp);
        idTemp = null;
        faseActual = 0;
        circulo.classList.toggle("inflado", false);
        guia.textContent = "Presiona para Respirar";
    }
}

boton.addEventListener("click", iniciarDtener);