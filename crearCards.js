let arrayIndex = [];
getLocal();

function getLocal() {
  arrayIndex = JSON.parse(localStorage.getItem("card"));
}

let cardContainer = document.getElementById("cardContainer");

/////----- función crear cartas --------//////

function crearCard(e) {
  card = "";
  cardContainer.innerHTML += `<div class="cardContainer">
<div class="card" style="width: 18rem;">
    <img src="${e.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${e.cardName}</h5>
      <p class="card-text">${e.champRol}</p>
      <a href="#" class="btn btn-primary">Trolear</a>
    </div>
  </div>`;
}
arrayIndex.forEach((e) => crearCard(e));

checkContainer = document.querySelector(".checkContainer");
arrayCheck = [...new Set(arrayIndex.map((e) => e.champRol))];
console.log(arrayCheck);

  arrayCheck.forEach((e) => {
    checkContainer.innerHTML += `<div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
      <label class="form-check-label" for="flexSwitchCheckDefault">${e}</label>
    </div>`;

  });






