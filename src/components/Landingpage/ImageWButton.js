import React from 'react';

import classes from './ImageWButton.module.css';

import Button from '../UI/Button';

const ImageWButton = (props) => {
    return (
        <div>
            <img src={props.image} alt='' />
            <Button>{props.children}</Button>
        </div>
    );
};

export default ImageWButton;