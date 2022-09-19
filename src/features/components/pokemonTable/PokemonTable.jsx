import React, { useEffect, useState } from "react";

import Pokemon from "./pokemon/Pokemon";
import Table from "./table/Table";
import axios from "axios";

import "../../styles/pokemonTable.scss";

const PokemonTable = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextUrl, setNextUrl] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState();

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokemonData((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };

  const getPokemonList = async () => {
    setIsLoading(true);
    const res = await axios.get(currentUrl);
    setNextUrl(res.data.next);
    getPokemon(res.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonList();
  }, [currentUrl]);

  return (
    <div className="pokemonTable">
      <Table
        pokemons={pokemonData}
        isLoading={isLoading}
        selectedPockemon={(pokemon) => {
          setSelectedPokemon(pokemon);
        }}
        setCurrentUrl={setCurrentUrl}
        nextUrl={nextUrl}
      />
      <Pokemon shownPokemon={selectedPokemon} />
    </div>
  );
};

export default PokemonTable;
