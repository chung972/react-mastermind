import React from "react";
import styles from "./ColorPicker.module.css";

const ColorPicker = (props) => (
    <div className={styles.ColorPicker}>
        {props.colors.map((color, index) => 
            <button 
                className={styles.button}
                style={{
                    backgroundColor: props.selColorIdx === index ? 'white' : color,
                    borderColor: color
                }}
                color={color}
                onClick={()=>props.handleColorSelection(index)}
                key={color}
                // when you need to pass in an argument, just wrap the function that requires the args
                // with a arrow function (you can even JUST have the empty parens and =>)

            />
        )}
    </div>
);

export default ColorPicker;
