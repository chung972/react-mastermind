import React from "react";
import GuessPeg from "../GuessPeg/GuessPeg";
import "./GuessPegs.css";

const GuessPegs = (props) => (
    <div className='GuessPegs'>
        {props.code.map((c, index) =>
            <GuessPeg
                code={props.code}
                index={index}
                color={props.colors}
                currentGuess={props.currentGuess}
                selColorIdx={props.selColorIdx}
                rowIdx={props.rowIdx}
                key={index}
            />
        )}
        {/* EVENTUALLY, and we'd have to do this in app.js at some point too, we want
            to iteratively generate these GuessPeg components (prob via mapping; might need idx too);
            also, we *could* do that for code in App.js (prob unecessary)
         */}
    </div>
);

export default GuessPegs;