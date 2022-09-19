import React from "react";
import "../../../styles/pokemon.scss";

const Pokemon = ({ shownPokemon }) => {
  return (
    <>
      {shownPokemon === undefined ? null : (
        <div className="pokemon">
          <img
            className="pokemon__img"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${shownPokemon.id}.png`}
          />
          <h2 className="pokemon__title">{shownPokemon.name}</h2>
          <div className="pokemon__types">
            <span className="pokemon__types-title">Types:</span>
            {shownPokemon.types.map((pokemon) => {
              return (
                <div key={Math.random()} className="pokemon__types-item">
                  {pokemon.type.name}
                </div>
              );
            })}
          </div>
          <table className="pokemon__description">
            <thead>
              <tr>
                <th>Characteristics</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {shownPokemon.stats.map((pokemonData) => {
                return (
                  <tr key={Math.random()}>
                    <td>{pokemonData.stat.name}</td>
                    <td>{pokemonData.base_stat}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Pokemon;
