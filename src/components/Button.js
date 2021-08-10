import React from 'react'
import './Button.css';


    const STYLES = ['primary--btn' , 'secondary--btn','secondary-btn-with-black-border','outline--btn'];
    const SIZES = ['small--btn','medium--btn','stylished-medium-btn', 'large--btn','stylished-large-btn','stylished-small-btn','small-btn-with-shadow', 'small-round-btn', 'small-btn-with-shadow-2'];

    export const Button =({
        children,
        type,
        onClick,
        buttonStyle,
        buttonSize
    }) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES [0];

        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES [0];

    return (    
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button> 
    )

};
export default Button
