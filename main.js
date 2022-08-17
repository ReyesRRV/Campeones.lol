let ObjetoLOL = {}
let arrayLOL = []
getLocal()

let botonEnviar = document.getElementById("botonEnviar")
let inputs = document.querySelectorAll("input[type=text]")
botonEnviar.addEventListener("click", pushArray)

function pushArray(){
    inputs.forEach(e => ObjetoLOL[e.name] = e.value)
    console.log(ObjetoLOL),
    arrayLOL.push(ObjetoLOL)
    console.log(arrayLOL)
    setLocal()
    alert("Su campeon se cargó con exito, no la cague")
}

////------------ Set & get del localStorage--------//////

function setLocal(){
    localStorage.setItem("card",JSON.stringify(arrayLOL))
}
function getLocal(){
    if(localStorage.length > 0){

        arrayLOL = JSON.parse(localStorage.getItem("card"))
    }else{
        arrayLOL = []
    }
}

