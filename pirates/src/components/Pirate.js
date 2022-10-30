import React from "react";

import "../assets/css/Pirate.css";
import avatar from "../assets/img/avatar.png";

function Pirate({
  pirate: { name, year, weapon, vessel, description },
  tagline,
  removePirate,
}) {
  return (
    <section>
      <summary>
        <img src={avatar} alt="pirate" />
        <h3>{name}</h3>
        <ul>
          <li>Died: {year}</li>
          <li>Weapon: {weapon}</li>
          <li>Vessel: {vessel}</li>
        </ul>
      </summary>
      <article>
        <h2>{tagline}</h2>
        <p>{description}</p>
        <button onClick={() => removePirate(name)}>Remove Pirate</button>
      </article>
    </section>
  );
}

export default Pirate;
