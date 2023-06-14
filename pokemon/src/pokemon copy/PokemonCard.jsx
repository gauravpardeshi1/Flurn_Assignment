import { useEffect, useState } from "react";
import { API_IMG_baseURL } from "../helpers/utils/constants";


const PokemonCard = ({ name, url }) => {
  const [pokemon, setPokemon] = useState({
    name: "",
    url: "",
    index: "",
    imageUrl: "pokeball.png",
  });

  useEffect(() => {
    let index = url.split("/")[url.split("/").length - 2];
    let imageUrl = `${API_IMG_baseURL}/${index}.svg`;
    setPokemon({ name, url, index, imageUrl });
  }, []);

  return (
    <div data-testid='pokemonId'>
      <div>
        <span>#</span>
        {pokemon.index}
      </div>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
};

export default PokemonCard;
