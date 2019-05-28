import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <div>
            <h3>{props.cardContentProps.linkTitle}</h3>
            <p>{props.cardContentProps.linkTextContent}</p>
            <p className="link-url">{props.cardContentProps.linkUrl}</p>
        </div>
    )
}

export default CardContent;