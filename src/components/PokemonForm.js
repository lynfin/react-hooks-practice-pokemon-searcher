import React, { useState } from "react";
import { Form } from "semantic-ui-react";
const blankForm = {
  name: "",
  hp: 0,
  sprites: {
    front: "",
    back: "",
  },
};
function PokemonForm({ onAddPokemon }) {
  const [formData, setFormData] = useState(blankForm);
  const { name, hp, sprites } = formData;
  const { front, back } = sprites;

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.name === "hp" ? parseInt(e.target.value) : e.target.value;
    if (!name.includes("Url")) {
      setFormData((oldFormData) => ({ ...oldFormData, [name]: value }));
    } else {
      const newName = name.replace("Url", "");
      const newSprites = { ...sprites, [newName]: value };
      setFormData((oldFormData) => ({ ...oldFormData, sprites: newSprites }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && hp && front && back) {
      fetch("http://localhost:3001/pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then((pokemons) => {
          onAddPokemon(pokemons);
          setFormData(blankForm);
        });
    }
  };
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={name}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            onChange={handleChange}
            value={hp}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
