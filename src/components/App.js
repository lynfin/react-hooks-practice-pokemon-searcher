import React from "react";
import PokemonPage from "./PokemonPage";

function App() {
  // ┌ └ ─ ├ │
  // App
  //  └ PokemonPage
  //      ├ PokemonForm
  //      ├ Search
  //      └ PokemonCollection
  //          └ PokemonCard
  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;
