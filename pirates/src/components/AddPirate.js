import React from "react";
import "../assets/css/AddPirateForm.css";

const AddPirate = ({ addPirate }) => {
  const [pirateName, setPirateName] = React.useState("");
  const [vessel, setVessel] = React.useState("");
  const [weapon, setWeapon] = React.useState("");
  const [death, setDeath] = React.useState("");
  const [description, setDescription] = React.useState("");

  const createPirate = (event) => {
    event.preventDefault();

    const pirate = {
      name: pirateName,
      vessel: vessel,
      weapon: weapon,
      death: death,
      description: description,
    };
    addPirate(pirate);
    setPirateName("");
    setVessel("");
    setWeapon("");
    setDeath("");
    setDescription("");
  };

  return (
    <form onSubmit={createPirate}>
      <label htmlFor="pirateName">Name</label>
      <input
        id="pirateName"
        type="text"
        placeholder="Pirate name"
        value={pirateName}
        onChange={(event) => setPirateName(event.target.value)}
      />
      <label htmlFor="vessel">Vessel</label>
      <input
        id="vessel"
        type="text"
        placeholder="Pirate vessel"
        value={vessel}
        onChange={(event) => setVessel(event.target.value)}
      />
      <label htmlFor="weapon">Weapon</label>
      <input
        id="weapon"
        type="text"
        placeholder="Pirate weapon"
        value={weapon}
        onChange={(event) => setWeapon(event.target.value)}
      />
      <label htmlFor="died">Died</label>
      <input
        id="died"
        type="text"
        placeholder="Date of death"
        value={death}
        onChange={(event) => setDeath(event.target.value)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        placeholder="Pirate description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit">Add Pirate</button>
    </form>
  );
};

export default AddPirate;
