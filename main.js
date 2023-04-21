let lista = [];

$(function () {
    let file = "http://localhost:3000/adatlista"
  adatBetolt(file,megjelenit);
  let pokemonVegpont = "https://pokeapi.co/api/v2/pokemon/17"
  adatBetolt(pokemonVegpont,pokemonMegjelenit);
});

function adatBetolt(vegpont, callbackFv) {
  fetch(vegpont)
    .then((response) => response.json())
    .then((data) => {
      callbackFv(data);
    })
    .catch((error) => console.log(error));
}

function megjelenit(adatok) {
    lista = adatok.adatlista
  console.log("megjelenit ", lista);
}

function pokemonMegjelenit(adatok){
    lista = adatok.pokemonVegpont;
    const container = $("main")
    console.log(name)
    container.append(`<h1>Név: ${adatok.name}</h1>`)
    container.append(`<h1>Kép: <img src=${adatok.sprites.front_shiny}></h1>`)

}