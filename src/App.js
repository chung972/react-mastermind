import React, { Component } from 'react';
// importing via {Component} is called NAMED IMPORT
import './App.css';
import GameBoard from "./components/GameBoard/GameBoard";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import GameTimer from "./components/GameTimer/GameTimer";
import NewGameButton from "./components/NewGameButton/NewGameButton";

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

// we can inherit Component like class App extends React.Component, OR do this below:
// import React, { Component} from "react";
class App extends Component {
  constructor() {
    // super must be called before accessing 'this'
    super();
    this.state = {
      // state is an object that holds information in its properties
      // to UPDATE the STATE, you need to call on this.setState(); not like this.state.key="something"
      selColorIdx: 0,
      guesses: [this.getNewGuess(), this.getNewGuess(), this.getNewGuess(), this.getNewGuess()],
      // for development purposes, let's initialize with TWO guess objects
      code: this.genCode()
    }
  }

  genCode() {
    return new Array(4).fill().map(() => Math.floor(Math.random() * colors.length));
    // NOTE: we are HARD CODING the length of the array; this will need to change as we 
    // implement higher difficulties
  }

  getNewGuess() {
    return {
      // code: [null, null, null, null],    // comment out until done testing
      code: [3, 2, 1, 0], // testing purposes
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }

  getWinTries() {
    // if winner, return num guesses, otherwise 0 (no winner)
    let lastGuess = this.state.guesses.length - 1;
    return this.state.guesses[lastGuess].score.perfect === 4 ? lastGuess + 1 : 0;
  }


  // normally, you START off with having FUNCTIONAL components, and then
  // refactor as you run into cases where a component needs to hold STATE

  render() {
    let winTries = this.getWinTries();
    return (
      <div className="App flex-h">
        <header className="App-header">React Mastermind</header>
        <div className="flex-h">
          <GameBoard colors={colors} guesses={this.state.guesses} />
          {/* remember, we DON'T want to try and add className (for styling) to GameBoard HERE;
            gotta go to the actual component file and do it there  */}
          <div className="CGN">
            <ColorPicker colors={colors} selColorIdx={this.state.selColorIdx}/>
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer>{(winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!')}</footer>
      </div>
    );
  }
}

export default App;
// there can only be one DEFAULT export
// but there can be MANY NAMED exports
// regardless of whether a component is a class or function, you will ALWAYS
// have to export it
