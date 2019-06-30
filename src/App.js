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
      guesses: [this.getNewGuess()],
      // for development purposes, let's initialize with TWO guess objects
      solutionCode: this.genCode()
    }
    // this.newGame();  // we don't need to do the above this.state when we can just call on newGame()
    // this.handleColorSelection = this.handleColorSelection.bind(this)  this was the OLD way to initialize a prop
  }
  // the NEW way to get the same functionality as above is called PROPERTY INITIAZLIER SYNTAX (we're going to
  // write it down below right above handleColorSelection() around line 67)

  genCode() {
    return new Array(4).fill().map(() => Math.floor(Math.random() * colors.length));
    // NOTE: we are HARD CODING the length of the array; this will need to change as we 
    // implement higher difficulties
  }

  getNewGuess() {
    return {
      code: [null, null, null, null],   
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


  // EVENT HANDLERS
  // handleColorSelection(colorIndex) {
  //   // jim recommends that whenever you code a method that is going to be used as an event handler,
  //   // start off with naming the function 'handle...'
  //   // because the onClick lives in GuessPeg, we have to pass this entire method down as a prop
  //   this.setState({selColorIdx: colorIndex})   // this code to the left will throw an error; 'this' is the props object
  //   // from ColorPicker (so we had to go to state up above and BIND this.handleColorSelection)

  // };

  handleColorSelection = (colorIndex) => {
    this.setState({selColorIdx: colorIndex})
  };

  // handlePegClick = (codeArray, currentGuessIdx, selColorIdx) => {
  //   const newGuessArr = {...this.state.guesses, this.state.guesses[currentGuessIdx].code[guessCodeIdx]: selColorIdx}
  //   const newColorIdx = {...this.state.guesses.code[guessCodeIdx], this.state.guesses.code[guessCodeIdx]: selColorIdx}
  //   this.setState({
  //     guesses: newGuessArr 
  //   })
  // }

  newGame = () => {
    this.setState({
      selColorIdx: 0,
      guesses: [this.getNewGuess()],
      solutionCode: this.genCode()
    })
  }

  // LIFECYCLE METHODS


  render() {
    let winTries = this.getWinTries();
    return (
      <div className="App flex-h">
        <header className='App-header-footer'>R E A C T &nbsp;&nbsp;&nbsp;  M A S T E R M I N D</header>
        <div className="flex-h align-flex-end">
          <GameBoard 
            colors={colors} 
            guesses={this.state.guesses} 
            selColorIdx={this.state.selColorIdx}/>
          {/* remember, we DON'T want to try and add className (for styling) to GameBoard HERE;
            gotta go to the actual component file and do it there  */}
          <div className="App-controls">
            <ColorPicker 
              colors={colors} 
              selColorIdx={this.state.selColorIdx}
              handleColorSelection={this.handleColorSelection}
            />
            <GameTimer />
            <NewGameButton newGame={this.newGame} />
          </div>
        </div>
        <footer className="App-header-footer">{(winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!')}</footer>
      </div>
    );
  }
}

export default App;
// there can only be one DEFAULT export
// but there can be MANY NAMED exports
// regardless of whether a component is a class or function, you will ALWAYS
// have to export it
