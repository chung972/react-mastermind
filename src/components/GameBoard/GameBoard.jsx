import React from "react";
import GuessRow from "../GuessRow/GuessRow";
import styles from './GameBoard.module.css';
const GameBoard = (props) => (
    <div className={styles.GameBoard}>
        {props.guesses.map((guess, index)=>
            <GuessRow 
                guess={guess}
                colors={props.colors}
                selColorIdx={props.selColorIdx}
                rowIdx={index}
                // add the currentGuess prop 
                currentGuess={index === (props.guesses.length - 1)}
                key={index}
            />
        )}
    </div>
);

export default GameBoard;