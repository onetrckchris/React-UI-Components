import React from 'react';
import './Header.css';

const ImageThumbnail = props => {
    return <img className="image-thumbnail" src={props.src} />;
}

export default ImageThumbnail;