const pokemonconteiner = document.querySelector(".poke-contenedor");
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value.toLowerCase();
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url).then((res) => {
        return res.json();        
      }).then((data) => {               
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
        crearpokemon(data);
    });     

}

function crearpokemon(pokemon){
    const h3 = document.getElementById('nombre');
    const h4 = document.getElementById('peso');
    const h5 = document.getElementById('tipo');
    const h6 = document.getElementById('defensa');
    const h7 = document.getElementById('ataque');

    h3.textContent = pokemon.name;
    h4.textContent = pokemon.weight;
    h5.textContent = pokemon.types[0].type.name;
    h6.textContent = pokemon.stats[1].base_stat;
    h7.textContent = pokemon.stats[2].base_stat;
    //h7.textContent = `Ataque: ${pokemon.stats[2].base_stat}`;
    
    
    const div = document.createElement('div');
    div.appendChild(h3)
    div.appendChild(h4)
    div.appendChild(h5)
    div.appendChild(h6)
    div.appendChild(h7)
    pokemonconteiner.appendChild(div);

}
const pokeImage = (url) => {
   const pokePhoto = document.getElementById("pokeImg");
   pokePhoto.src = url;
}

