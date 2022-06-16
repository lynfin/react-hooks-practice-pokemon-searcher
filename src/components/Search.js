import React from "react";

function Search({ searchTerm, onUpdateSearchTerm }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          onChange={(e) => onUpdateSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
