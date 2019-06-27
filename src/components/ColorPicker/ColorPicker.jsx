import React from "react";
import styles from "./ColorPicker.module.css";

const ColorPicker = (props) => (
    <div className={styles.div}>
        {props.colors.map((color, index) => 
            <button 
                color={color}
                className={styles.button}
                style={{
                    backgroundColor: props.selColorIdx === index ? 'white' : color,
                    borderColor: color
                }}
                key={color}
            />
        )}
    </div>
);

export default ColorPicker;
