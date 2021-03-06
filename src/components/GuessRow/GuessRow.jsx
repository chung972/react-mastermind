import React from "react";
import GuessPegs from "../GuessPegs/GuessPegs";
import GuessScore from "../GuessScore/GuessScore";
import ScoreButton from "../ScoreButton/ScoreButton";
import styles from "./GuessRow.module.css";

const GuessRow = (props) => (
    <div className={styles.GuessRow}>
        <div className={styles.rowNum} style={{color: props.currentGuess ? 'black' : 'lightgrey'}}>{props.rowIdx + 1}</div>
        {/* because we can't access the key prop, we have to pass in a different prop
            this IS redundant, but necessary; also, we're adding 1 to be 1-based */}
        <GuessPegs 
            colors={props.colors}
            selColorIdx={props.selColorIdx}
            code={props.guess.code}
            currentGuess={props.currentGuess}
            rowIdx={props.rowIdx}
        />
        {
            props.currentGuess ? <ScoreButton /> : 
            <GuessScore score={props.guess.score}/>
        }
    </div>
);

export default GuessRow;