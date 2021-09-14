let personastotales = 0;
const card = document.getElementById("personastotales")
const adentro = document.getElementById("personasinterior")

let personasadentro = 0;

const agregar = () =>{
    
    personastotales++
    personasadentro++

    card.value = personastotales
    adentro.value = personasadentro

}

const quitar = () =>{
    personasadentro--
    adentro.value = personasadentro

}