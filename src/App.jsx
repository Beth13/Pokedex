import React from "react";
import Header from "./features/components/header/Header";
import PokemonTable from "./features/components/pokemonTable/PokemonTable";

const App = () => {
  return (
    <div className="page">
      <Header />
      <PokemonTable />
    </div>
  );
};

export default App;
