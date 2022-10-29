import React from "react";

import "../assets/css/Pirate.css";

function Pirate(props) {
  return (
    <section>
      <p>Favorite saying: {props.tagline}</p>
    </section>
  );
}

export default Pirate;
