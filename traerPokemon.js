window.onload = function() {


}


function getPkmNumer() {
    let textPokemonNumber = document.getElementById("pName").value;

    if (textPokemonNumber >= 1 && textPokemonNumber <= 151) {
        getPokemon(textPokemonNumber)
    } else {
        alert("Números comprendidos entre 1 y 151");
    }



}

function getPokemon(numberPokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${numberPokemon}`)

    .then(response => {
            if (response.status == 200) {
                return response.text();
            }
        })
        .then(response => {
            //get json con todos los pokemons
            var pokemons = JSON.parse(response);
            console.log(pokemons);
            //insertamos el nombre en el html
            var texto = document.getElementById("pokemonName");
            let pokemonName = pokemons.name;
            texto.innerHTML = pokemonName;


            let pokemonImage = pokemons.sprites.front_default;

            var divImagen = document.getElementById("pokemonImage");
            var imagen = document.createElement("img");
            imagen.setAttribute("src", pokemonImage);
            imagen.setAttribute("class", "card-img-top");
            imagen.setAttribute("alt", "Card image cap");
            divImagen.appendChild(imagen)



        });
}