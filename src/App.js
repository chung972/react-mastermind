import React, {Component} from 'react';
import './App.css';
import GameBoard from "./components/GameBoard/GameBoard";
import ColorPicker from "./components/ColorPicker/ColorPicker";

class App extends Component {
  // we can inherit Component like class App extends React.Component, OR do this below:
  // import React, { Component} from "react";


  // normally, you START off with having FUNCTIONAL components, and then
  // refactor as you run into cases where a component needs to hold STATE
  render() {
    return (
      <div className="App">
        <header className="App-header">React Mastermind</header>
        <GameBoard />
        {/* remember, we DON'T want to try and add className (for styling) to GameBoard HERE;
            gotta go to the actual component file and do it there  */}
        <ColorPicker />
      </div>
    );
  }
}

export default App;
// there can only be one DEFAULT export
// but there can be MANY NAMED exports
