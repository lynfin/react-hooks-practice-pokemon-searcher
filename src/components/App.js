import React from "react";
import PokemonPage from "./PokemonPage";

function App() {
  // ┌ └ ─ ├ │
  // App
  //  └ PokemonPage [pokemons, searchTerm]
  //      ├ PokemonForm
  //      ├ Search
  //      └ PokemonCollection
  //          └ PokemonCard [displayedImage]
  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;
