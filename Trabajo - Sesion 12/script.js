// Desarrollar una pequeña app con la información de la pokeAPI.
 
// 1.       Crear una function que les permita consultar la data de la pokeapi. https://pokeapi.co/api/v2/generation/1/
 
// 2.       Van a crear una pagina en la que exista un titulo que diga (POKEMONS), el nombre del pokemon seleccionado y 
// un selector que cuando se cambie, cambie el pokemon que se visualiza en la pantalla.
 
// 3.       En pantalla se deben renderizar los siguientes datos:
 
// a.       Foto de los pokemons (de frente).
// b.       Nombre del pokemon.

const base_url="https://pokeapi.co/api/v2/generation/1/"
const url_pokemon="https://pokeapi.co/api/v2/pokemon/"
let select = document.getElementById("select1")
let front_default_picture = document.getElementById("pokemon_picture_front_default")
let front_shiny_picture = document.getElementById("pokemon_picture_front_shiny")
let back_default_picture = document.getElementById("pokemon_picture_back_default")
let back_shiny_picture = document.getElementById("pokemon_picture_back_shiny")

select.addEventListener('change', async function() {
    let response = await fetch(url_pokemon + select.value)
    let data = await response.json()
    front_default_picture.setAttribute('src', data.sprites.front_default)
    front_shiny_picture.setAttribute('src', data.sprites.front_shiny)
    back_default_picture.setAttribute('src', data.sprites.back_default)
    back_shiny_picture.setAttribute('src', data.sprites.back_shiny)
});

async function mostrarPokems(num) {
    let response = await fetch(`https://pokeapi.co/api/v2/generation/${num}/`)
    let data = await response.json()
    data.pokemon_species.forEach((element) => {
        
    });
    return data
}

async function mostrarPokemon() {
    let response = await fetch(base_url)
    let data = await response.json()
    console.log(data)
    return data
}

async function mostrarnamePokemon() {
    let response = await fetch(base_url)
    let data = await response.json()
    data.pokemon_species.forEach((element) => {
        let option = document.createElement("option")
        option.value = element.name
        option.innerText = element.name
        select.appendChild(option)
        
    });
    return data
}
