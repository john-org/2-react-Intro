import avatar from "../assets/img/avatar.png"
import "../assets/css/Pirate.css"

export function Pirate(props) {
  return (
    <section>
      <summary>
        <img src={avatar} alt="pirate" />
        <h3>{props.pirate.name}</h3>
        <ul>
          <li>Died: {props.pirate.year}</li>
          <li>Weapon: {props.pirate.weapon}</li>
          <li>Vessel: {props.pirate.vessel}</li>
        </ul>
      </summary>
      <article>
        <h2>{props.tagline}</h2>
        <p>{props.pirate.desc}</p>
      </article>
    </section>
  )
}
