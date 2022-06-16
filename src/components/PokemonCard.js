import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const { name, hp, sprites } = pokemon;
  const [displayedImage, setDisplayedImage] = useState(sprites.front);
  const handleClick = () => {
    setDisplayedImage((curImage) => {
      if (curImage === sprites.front) {
        return sprites.back;
      } else {
        return sprites.front;
      }
    });
  };
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={displayedImage} alt="pokemonFront" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
