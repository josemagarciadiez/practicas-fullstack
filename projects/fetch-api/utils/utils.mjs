import { POKEMON_TYPE_COLOR, POKEMON_TYPE_GRADIENT } from "./constants.mjs";

export function capitalizeFirstLetter(word) {
  if (word.length === 0) {
    return word;
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function createPokemonCard(pokemon) {
  const $container = document.createElement("article");
  $container.classList.add("card_container");

  const $card = document.createElement("article");
  $card.classList.add("card_wrapper");

  const $image_container = document.createElement("div");
  $image_container.classList.add("image");

  const $clip = document.createElement("div");
  $clip.classList.add("clip");

  if (pokemon.types.length > 0) {
    $clip.style.background =
      POKEMON_TYPE_GRADIENT[pokemon.types[0].type["name"]];
  }

  const $img = document.createElement("img");
  $img.setAttribute(
    "src",
    `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`
  );
  $img.setAttribute("alt", `Image of ${pokemon.name}`);

  $image_container.appendChild($clip);
  $image_container.appendChild($img);

  const $details_container = document.createElement("div");
  $details_container.classList.add("details");

  const $header = document.createElement("div");
  $header.classList.add("header");

  const $div_1 = document.createElement("div");
  $div_1.classList.add("title");
  const $title = document.createElement("h2");
  const $id = document.createElement("p");

  $title.innerText = capitalizeFirstLetter(pokemon.name);
  $id.innerText = `N° ${pokemon.id}`;

  $div_1.appendChild($title);
  $div_1.appendChild($id);

  $header.appendChild($div_1);

  const $div_2 = document.createElement("div");
  $div_2.classList.add("hp");
  const $hp_title = document.createElement("p");
  const $hp_value = document.createElement("h2");

  $hp_title.innerText = "HP";
  $hp_value.innerText = pokemon.stats[0].base_stat;

  $div_2.appendChild($hp_title);
  $div_2.appendChild($hp_value);

  $header.appendChild($div_2);

  const $badges = document.createElement("div");
  $badges.classList.add("badges");

  pokemon.types.forEach(({ type }) => {
    const $badge = document.createElement("div");
    $badge.classList.add("badge");

    const $icon = document.createElement("div");
    $icon.classList.add("icon");
    $icon.style.backgroundColor = POKEMON_TYPE_COLOR[type.name];

    const $img = document.createElement("img");
    $img.setAttribute("src", `./assets/icons/${type.name}.svg`);
    $img.setAttribute("alt", `${capitalizeFirstLetter(type.name)} type icon.`);

    $icon.appendChild($img);

    const $type = document.createElement("span");
    $type.innerText = capitalizeFirstLetter(type.name);

    $badge.appendChild($icon);
    $badge.appendChild($type);

    $badges.appendChild($badge);
  });

  const $stats = document.createElement("div");
  $stats.classList.add("stats");
  // STAT 1 --------------------------------------------------
  const $stat1 = `<div class="stat">
                      <div class="stat_title">
                        <img src="./assets/sword.svg" alt="Sword Icon" />
                        <span>Attack</span>
                    </div>
                    <div class="stat_value">
                      <span>${pokemon.stats[1].base_stat}</span>
                    </div>
                  </div>`;
  // STAT 2 --------------------------------------------------
  const $stat2 = `<div class="stat">
                      <div class="stat_title">
                        <img src="./assets/shield.svg" alt="Sword Icon" />
                        <span>Defense</span>
                    </div>
                    <div class="stat_value">
                      <span>${pokemon.stats[2].base_stat}</span>
                    </div>
                    </div>`;
  // STAT 3 --------------------------------------------------
  const $stat3 = `<div class="stat">
                      <div class="stat_title">
                        <img src="./assets/bolt.svg" alt="Sword Icon" />
                        <span>Speed</span>
                      </div>
                      <div class="stat_value">
                      <span>${pokemon.stats[5].base_stat}</span>
                      </div>
                      </div>`;
  // ---------------------------------------------------------

  $stats.innerHTML += $stat1;
  $stats.innerHTML += $stat2;
  $stats.innerHTML += $stat3;

  $details_container.appendChild($header);
  $details_container.appendChild($badges);
  $details_container.appendChild($stats);

  $card.appendChild($image_container);
  $card.appendChild($details_container);

  $container.appendChild($card);

  return $container;
}
