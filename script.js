//Berdasarkan tutorial "PokeDex - Javascript Tutorial - Day 19" oleh Florin Pop (YouTube)

const poke_container = document.getElementById('poke_container');
const pokemons_number = 30;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#FCEAFF',
    poison: '#98d7a5',
    bug: '#F8D5A3',
    dragon: '#97b3e6',
    psychic: '#EAEADA1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemons_number; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
}

//fetchPokemons();

function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const id = pokemon.id;
    const name = pokemon.name;
    const type = pokemon.types[0].type.name;
    const image = pokemon.sprites['front_default'];
    const color = colors[type];

    pokemonEl.style.backgroundColor = color;

    const pokeInnerHTML = `
        <p>${id}: ${name}</p>
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
        </div>
        <p>type: ${type}</p>
    `;

    pokemonEl.innerHTML = pokeInnerHTML;

    poke_container.appendChild(pokemonEl);
}