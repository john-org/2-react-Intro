import React from "react"
import "../assets/css/AddPirateForm.css"

const AddPirate = () => {
  const [pirateName, setPirateName] = React.useState("")
  const [vessel, setVessel] = React.useState("")
  const [weapon, setWeapon] = React.useState("")

  const createPirate = (event) => {
    event.preventDefault()
    console.log("making a pirate")
    const pirate = {
      name: pirateName,
      vessel: vessel,
      weapon: weapon
    }
    console.log(pirate)
  }

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
      <button type="submit">Add Pirate</button>
    </form>
  )
}

export default AddPirate
