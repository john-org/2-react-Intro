import React from "react"
import Header from "./components/Header"
import AddPirate from "./components/AddPirate"
import { Pirate } from "./components/Pirate"

import { db } from "./firebase"
import {
  collection,
  query,
  onSnapshot,
  doc,
  addDoc,
  updateDoc,
  deleteDoc
} from "firebase/firestore"

// import piratesFile from "./data/sample-pirates-array"

const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!"
]

function randomize() {
  return pirateCalls[Math.floor(Math.random() * pirateCalls.length)]
}

function App() {
  // const [pirates, setPirates] = React.useState(piratesFile)
  const [pirates, setPirates] = React.useState([])

  React.useEffect(() => {
    const q = query(collection(db, "pirates"))
    // const unsub =
    onSnapshot(q, (querySnapshot) => {
      let piratesArray = []
      querySnapshot.forEach((doc) => {
        piratesArray.push({ ...doc.data(), id: doc.id })
      })
      setPirates(piratesArray)
    })
    // return () => unsub();
  }, [])

  // const addPirate = (pirate) => {
  //   pirate.image = "avatar.png"
  //   setPirates((prev) => [pirate, ...prev])
  // }

  const addPirate = async (pirate) => {
    await addDoc(collection(db, "pirates"), {
      name: pirate.name,
      vessel: pirate.vessel,
      weapon: pirate.weapon,
      death: pirate.death,
      desc: pirate.desc,
      image: "avatar.png"
    })
  }

  // const removePirate = (pirateName) => {
  //   const newPirates = pirates.filter((pirate) => pirate.name !== pirateName)
  //   setPirates(newPirates)
  //   // setPirates([...newPirates]);
  // }

  const removePirate = async (id) => {
    await deleteDoc(doc(db, "pirates", id))
  }

  return (
    <>
      <Header title={randomize()} />
      <p>{JSON.stringify(pirates)}</p>
      <div className="pirate">
        <AddPirate addPirate={addPirate} />
        {pirates.map((pirate) => (
          <Pirate
            // key={pirate.name}
            key={pirate.id}
            tagline={randomize()}
            pirate={pirate}
            removePirate={removePirate}
          />
        ))}
      </div>
    </>
  )
}

export default App
