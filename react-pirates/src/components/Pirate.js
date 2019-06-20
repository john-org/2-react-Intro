import React from 'react';
import '../assets/css/Pirate.css';
import avatar from '../assets/img/avatar.png';

class Pirate extends React.Component {
  render() {
    const { details } = this.props.pirate;
    console.log(details);
    return (
      <div className="pirate">
        <ul>
          <li>
            <img src={avatar} alt="pirate" />
            <h3>{this.props.pirate.name}</h3>
            <p>Died: {this.props.pirate.year}</p>
            <p>Favorite weapon: {this.props.pirate.weapon}</p>
            <p>Sailed on: {this.props.pirate.vessel}</p>
          </li>
          <li>
            <p>{this.props.pirate.desc}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pirate;
