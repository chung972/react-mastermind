import React from "react";
import GuessPegs from "../GuessPegs/GuessPegs";
import GuessScore from "../GuessScore/GuessScore";
import ScoreButton from "../ScoreButton/ScoreButton";

const GuessRow = (props) => (
    <div className='flex-h'>
        <div>{props.rowIdx + 1}</div>
        {/* because we can't access the key prop, we have to pass in a different prop
            this IS redundant, but necessary; also, we're adding 1 to be 1-based */}
        <GuessPegs 
            colors={props.colors}
            code={props.guess.code}
        />
        {
            props.currentGuess ? <ScoreButton /> : <GuessScore />
        }
    </div>
);

export default GuessRow;