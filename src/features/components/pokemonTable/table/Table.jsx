import React from "react";
import "../../../styles/table.scss";

const Table = ({
  pokemons,
  isLoading,
  selectedPockemon,
  setCurrentUrl,
  nextUrl,
}) => {
  return (
    <div className="table">
      {isLoading && (
        <div className="table__loading">
          <h1 className="table__loading-text">
            Wait till pokemons will be loaded...
          </h1>
          <div className="table__loading-spin"></div>
        </div>
      )}
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          className="pokemon__item"
          onClick={() => selectedPockemon(pokemon)}
        >
          <img className="pokemon__img" src={pokemon.sprites.front_default} />
          <h3 className="pokemon__name">{pokemon.name}</h3>

          <div className="pokemon__type">
            {pokemon.types.map((pokemon) => {
              return (
                <span key={Math.random()} className="pokemon__type-item">
                  {pokemon.type.name}
                </span>
              );
            })}
          </div>
        </div>
      ))}
      <div className="table__navigation">
        <button
          onClick={() => {
            setCurrentUrl(nextUrl);
          }}
          className="table__navigation-btn"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Table;
