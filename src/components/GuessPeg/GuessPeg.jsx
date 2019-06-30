import React from "react";
import styles from "./GuessPeg.module.css";

const GuessPeg = (props) => (
    <button 
        className={styles.peg}
        style={{
            backgroundColor: props.code[props.index] ? "white" : props.color[props.code[props.index]],
            border: props.code[props.index] ? `1px solid ${props.color}` : '1px dashed gray',
            // gotta use props.code as the conditional; remember, for a NEW guess, each element
            // in the guess code array is set to null; so, IF that code is NOT null, color the border
            // to be the color of whatever. ELSE, if code === null, then leave the border to be gray dashed
            cursor: props.currentGuess && 'pointer'
            // remember, having the logical AND is like having an in-line if; progress through stack
        }} />
);

export default GuessPeg;