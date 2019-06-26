import React from "react";
import GuessPegs from "../GuessPegs/GuessPegs";
import GuessScore from "../GuessScore/GuessScore";

const GameRow = (props) => (
    <div className="component">
        GameRow
        <GuessPegs />
        <GuessScore />
    </div>
);

export default GameRow;