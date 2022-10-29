import React from "react";

import "../assets/css/Pirate.css";

function Pirate(props) {
  return (
    <section>
      <h2>{props.pirate.name}</h2>
      <p>Favorite saying: {props.tagline}</p>
    </section>
  );
}

export default Pirate;
