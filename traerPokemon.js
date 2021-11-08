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
            texto.innerHTML = "Pokémon name: " + pokemonName;

            //insertamos la imagen en el html
            //   var imagen = document.getElementById("card");
            let pokemonImage = pokemons.sprites.front_default;
            //imagen.innerHTML = "<img src=" + pokemonImage + " width=\'150px\' height=\'150px\'>";
            /*   imagen.appendChild("<img class="
                   'card-img-top'
                   " src=" + pokemonImage + " alt ="
                   'Card image cap'
                   ">"); */
            var imagen = document.createElement("img");
            imagen.setAttribute("src", pokemonImage);
            imagen.setAttribute("class", "card-img-top");
            imagen.setAttribute("alt", "Card image cap");
            var card = document.getElementById("card");
            card.insertBefore(imagen)


        });
}