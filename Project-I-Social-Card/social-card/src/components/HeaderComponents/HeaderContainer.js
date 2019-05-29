import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    const headerTitleProps = {
        h1Text: 'Lambda School',
        spanText: '@LambdaSchool • 28 May'
    }

    return (
        <div className="header-container">
            <ImageThumbnail src="./imgs/lambda_logo.png" />
            <div className="header-content">
                <HeaderTitle headerTitleProps={headerTitleProps} />
                <HeaderContent text="Let's learn React by building simple interfaces with components. 
                Don't try to overthink it, just keep it simple and fun. 
                Once you feel comfortable using components you are well on your way to mastering React!" />
            </div>
        </div>
    );
};

export default HeaderContainer;