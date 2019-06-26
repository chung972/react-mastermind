import React from "react";
import GuessPegs from "../GuessPegs/GuessPegs";
import GuessScore from "../GuessScore/GuessScore";

const GameRow = (props) => (
    <div>
        GameRow
        <GuessPegs />
        <GuessScore />
    </div>
);

export default GameRow;