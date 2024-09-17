import { getPokemons } from "./utils/data.mjs";
import { createPokemonCard } from "./utils/utils.mjs";

async function renderPokemons() {
  const $container = document.querySelector(".container");

  const pokemons = await getPokemons();

  console.log(pokemons);

  pokemons.map((pokemon) => {
    if (pokemon) {
      const $pokemonCard = createPokemonCard(pokemon);
      $container.appendChild($pokemonCard);
    }
  });
}

document.addEventListener("load", renderPokemons());
