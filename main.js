let inputs = document.querySelectorAll("input[type=text]")
let ObjetoLOL = {}

inputs.forEach(e => ObjetoLOL[e.name] = e.value)

let botonEnviar = document.getElementById("botonEnviar")
console.log(botonEnviar)
let ArrayLOL = []

botonEnviar.addEventListener("click", pushArray())

function pushArray(){
    ArrayLOL.push(...[ObjetoLOL])
    console.log(ArrayLOL)
}