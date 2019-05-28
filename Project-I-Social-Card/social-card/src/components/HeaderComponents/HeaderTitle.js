import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <h3>
            {props.headerTitleProps.h1Text}
            <span>{props.headerTitleProps.spanText}</span>
        </h3>
    )
}

export default HeaderTitle;