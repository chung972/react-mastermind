import React from "react";
import GuessRow from "../GuessRow/GuessRow";
import "./GameBoard.css";

const GameBoard = (props) => (
    <div className="GameBoard">
        {props.guesses.map((guess, index)=>
            <GuessRow 
                guess={guess}
                colors={props.colors}
                rowIdx={index}
                // add the currentGuess prop 
                currentGuess={index === (props.guesses.length - 1)}
                key={index}
            />
        )}
    </div>
);

export default GameBoard;