import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    const cardContentProps = {
        linkTitle: 'Get started with React',
        linkTextContent: "React makes it painless to create interactice UIs. Design simple views for each state in your application.",
        linkUrl: 'reactjs.org'
    }

    return (
        <div>
            <CardBanner />
            <CardContent cardContentProps={cardContentProps} />
        </div>
    )
}

export default CardContainer;
