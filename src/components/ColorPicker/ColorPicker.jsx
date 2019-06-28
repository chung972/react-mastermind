import React from "react";
import styles from "./ColorPicker.module.css";

const ColorPicker = (props) => (
    <div className={styles.ColorPicker}>
        {props.colors.map((color, index) => 
            <button 
                color={color}
                className={styles.button}
                style={{
                    backgroundColor: props.selColorIdx === index ? 'white' : color,
                    borderColor: color
                }}
                key={color}
                onClick={()=>props.handleColorSelection(index)}
                // when you need to pass in an argument, just wrap the function that requires the args
                // with a arrow function (you can even JUST have the empty parens and =>)

            />
        )}
    </div>
);

export default ColorPicker;
