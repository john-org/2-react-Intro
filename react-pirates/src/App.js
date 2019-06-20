import React from 'react';
import Pirate from './components/Pirate';
import Header from './components/Header';
import piratesFile from './data/sample-pirates-array';

function App() {
  return (
    <div>
      <Header title="Pirate Database" />
      {piratesFile.map((pirate, index) => (
        <Pirate key={index} pirate={pirate} />
      ))}
    </div>
  );
}

export default App;
