import React from "react";
import Header from "./Header";
import Pirate from "./Pirate";
import piratesFile from "../data/sample-pirates-array";

const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!",
];

const randomize = () =>
  pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

function App() {
  return (
    <div>
      <Header title={randomize()} />
      <div className="pirate">
        {piratesFile.map((pirate) => (
          <Pirate tagline={randomize()} />
        ))}
      </div>
    </div>
  );
}

export default App;
