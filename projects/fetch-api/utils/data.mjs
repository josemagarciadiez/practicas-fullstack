export async function getData(url) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Algo salío mal.");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPokemons() {
  try {
    const pokemonList = await getData(
      "https://pokeapi.co/api/v2/pokemon?limit=100"
    );

    if (!pokemonList || !pokemonList.results) {
      throw new Error("No se pudo obtener el listado de Pokemons.");
    }

    const pokemons = await Promise.all(
      pokemonList.results.map((pokemon) => getData(pokemon.url))
    );

    return pokemons;
  } catch (error) {
    console.error(error);

    return [];
  }
}
