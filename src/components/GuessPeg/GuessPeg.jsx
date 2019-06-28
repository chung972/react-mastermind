import React from "react";
import styles from "./GuessPeg.module.css";

const GuessPeg = (props) => (
    <button 
        className={styles.peg}
        style={{
            backgroundColor: props.color,
            border: props.color ? `1px solid ${props.color}` : '1px dashed gray'
        }} />
);

export default GuessPeg;