import avatar from "../assets/img/avatar.png"
import "../assets/css/Pirate.css"

export function Pirate(props) {
  const { name, year, weapon, vessel, desc } = props.pirate
  const { tagline } = props
  const removePirate = props.remotePirate

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
        <p>{desc}</p>
        <button onClick={() => removePirate(name)}>Remove Pirate</button>
      </article>
    </section>
  )
}

// export default Pirate;
