let arrayIndex = [];
getLocal();

function getLocal() {
  arrayIndex = JSON.parse(localStorage.getItem("card"));
}

let cardContainer = document.getElementById("cardContainer");

/////----- función crear cartas --------//////

function crearCard(e) {
  // card = "";
  card = `<div class="cardContainer">
<div class="card" style="width: 18rem;">
    <img src="${e.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${e.cardName}</h5>
      <p class="card-text">${e.champRol}</p>
      <a href="#" class="btn btn-primary">Trolear</a>
    </div>
  </div>`;


  cardContainer.innerHTML += card
}

function imprimirArray(arrayCompleta){
  // imprimo todas las cartas en el index
  arrayCompleta.forEach((e) => crearCard(e));
}


//imprimo todos los checkboxs
checkContainer = document.querySelector(".checkContainer");
arrayCheck = [...new Set(arrayIndex.map((e) => e.champRol))];
console.log(arrayCheck);


  arrayCheck.forEach((e) => {
    checkContainer.innerHTML += `<div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" role="switch" id="${e}">
      <label class="form-check-label" for="${e}">${e}</label>
    </div>`;
  });



  let checkClickeado = [] // [guardamos la posicion clickeada. ej: TOP,MID]
  let todosLosCheckbox = document.querySelectorAll("input[type=checkbox]") // [todos los checkbox]
  function crearCheckbox(){
    todosLosCheckbox.forEach(checkB => {
      checkB.addEventListener("click",e =>{
        let estaChecked = e.target.checked
        console.log(estaChecked)
      if(estaChecked){
        checkClickeado.push(e.target.id)
        filtros()
      }else{
        checkClickeado = checkClickeado.filter(uncheck => uncheck !== e.target.id)
        filtros()
      }
      console.log(checkClickeado)
    })
  })
}
crearCheckbox()


// filtro 
// SEARCH
let textSearch = ""
let inputSearch = document.querySelector("#search")
inputSearch.addEventListener("keyup",(e) =>{
  textSearch = e.target.value
})



 // filtro de checkbox y search
function filtros(){
  let filtroFinal =[]
  if(textSearch == "" && checkClickeado.length>0){
    checkClickeado.map(champ =>{ filtroFinal.push(...arrayIndex.filter(obj => obj.champRol === champ))})
  }else{
    filtroFinal = arrayIndex
  }
  imprimirArray(filtroFinal)
}
filtros()

console.log(arrayIndex)


