const btnverificar = document.getElementById("btnverificar")
const btnsalida = document.getElementById("btnsalida")

let personastotales = 0;
let personasadentro = 0;
const card = document.getElementById("personastotales")
const adentro = document.getElementById("personasinterior")

btnverificar.addEventListener("click", (e) => {
    let codigo = document.getElementById("codigo")
    if (codigo.value == "codigo") {
        console.log("correcto");
        personastotales++
        personasadentro++

        card.value = personastotales
        adentro.value = personasadentro
    }
})

btnsalida.addEventListener("click", (e) => {
    let codigo = document.getElementById("codigo")
    if (codigo.value == "codigo") {
        console.log("correcto");
        personasadentro--
        adentro.value = personasadentro
    }
})