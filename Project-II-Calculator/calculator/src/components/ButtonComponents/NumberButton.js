import React from 'react';
import './Button.css';

const NumberButton = props => {
    function handleClick(event) {
        event.preventDefault();
        console.log(this);
    }

    return <div className={props.numberButtonProps.buttonStyle} onClick={handleClick}>{props.numberButtonProps.value}</div>
}

export default NumberButton;