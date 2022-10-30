import React from "react";
import Header from "./Header";
import Pirate from "./Pirate";
import AddPirate from "./AddPirate";
// import piratesFile from "../data/sample-pirates-array";

import { db } from "./firebase";
import {
  collection,
  query,
  onSnapshot,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!",
];

const randomize = () =>
  pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

function App() {
  const [pirates, setPirates] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "pirates"));
    // const unsub =
    onSnapshot(q, (querySnapshot) => {
      let piratesArray = [];
      querySnapshot.forEach((doc) => {
        piratesArray.push({ ...doc.data(), id: doc.id });
      });
      setPirates(piratesArray);
    });
    // return () => unsub();
  }, []);

  const addPirate = async (pirate) => {
    await addDoc(collection(db, "pirates"), {
      name: pirate.name,
      vessel: pirate.vessel,
      weapon: pirate.weapon,
      death: pirate.death,
      description: pirate.description,
      image: "avatar.png",
    });
  };

  const removePirate = async (id) => {
    await deleteDoc(doc(db, "pirates", id));
  };

  return (
    <div>
      <Header title={randomize()} />
      <div className="pirate">
        <AddPirate addPirate={addPirate} />
        <p>{JSON.stringify(pirates)}</p>
        {pirates.map((pirate) => (
          <Pirate
            key={pirate.id}
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
