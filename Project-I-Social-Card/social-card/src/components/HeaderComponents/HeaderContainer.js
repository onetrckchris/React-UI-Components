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
        <div>
            <div>
                <ImageThumbnail src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" />
                <HeaderTitle headerTitleProps={headerTitleProps} />
                <HeaderContent text="Let's learn React by building simple interfaces with components. 
                Don't try to overthink it, just keep it simple and fun. 
                Once you feel comfortable using components you are well on your way to mastering React!" />
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default HeaderContainer;