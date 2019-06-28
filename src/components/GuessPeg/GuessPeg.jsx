import React from "react";
import styles from "./GuessPeg.module.css";

const GuessPeg = (props) => (
    <button 
        className={styles.peg}
        style={{
            backgroundColor: props.color,
            border: props.color ? `1px solid ${props.color}` : '1px dashed gray',
            cursor: props.currentGuess && 'pointer'
            // remember, having the logical AND is like having an in-line if; progress through stack
        }} />
);

export default GuessPeg;