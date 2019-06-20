import React from 'react';
import Pirate from './components/Pirate';
import Header from './components/Header';
import PirateForm from './components/PirateForm';

import piratesFile from './data/sample-pirates-array';

class App extends React.Component {
  state = {
    pirates: piratesFile,
  };

  addPirate = pirate => {
    console.log(pirate);
    //take a copy of the current state and put it into pirates var
    const pirates = [...this.state.pirates];
    console.log(pirates);
    pirates.unshift(pirate);
    console.log(pirates);
    //set state pirates with var pirates
    this.setState({ pirates: pirates });
  };

  removePirate = index => {
    console.log(index);
    const pirates = [...this.state.pirates];
    pirates.splice(index, 1);
    console.log(pirates);
    this.setState({ pirates: pirates });
  };

  render() {
    return (
      <>
        <Header title="Pirate Database" />
        <PirateForm addPirate={this.addPirate} />
        {this.state.pirates.map((pirate, index) => (
          <Pirate
            key={index}
            index={index}
            pirate={pirate}
            removePirate={this.removePirate}
          />
        ))}
      </>
    );
  }
}

export default App;
