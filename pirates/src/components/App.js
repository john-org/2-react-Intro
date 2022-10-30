import React from "react";
import Header from "./Header";
import Pirate from "./Pirate";
import AddPirate from "./AddPirate";
import piratesFile from "../data/sample-pirates-array";

const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!",
];

const randomize = () =>
  pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

function App() {
  const [pirates, setPirates] = React.useState(piratesFile);

  const addPirate = (pirate) => {
    pirate.image = "avatar.png";
    setPirates((prev) => [pirate, ...prev]);
  };

  const removePirate = (pirateName) => {
    const newPirates = pirates.filter((pirate) => pirate.name !== pirateName);
    setPirates(newPirates);
  };

  return (
    <div>
      <Header title={randomize()} />
      <div className="pirate">
        <AddPirate addPirate={addPirate} />
        {pirates.map((pirate) => (
          <Pirate
            key={pirate.name}
            tagline={randomize()}
            pirate={pirate}
            removePirate={removePirate}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
