import React from 'react';
// import image1 from '../../images/bgimage1.jpg'
import image2 from '../../images/bgimage2.jpg'
import image3 from '../../images/bgimage3.jpg'
import image4 from '../../images/bgimage4.jpg'

import DescriptionPanel from './DescriptionPanel';
import Button from '../UI/Button';

import classes from './Background.module.css';

const Background = (props) => {
    return (
        <div className={classes.background}>
            <div className={classes.bg_square}>
                <ul>
                    <li>Arcabook</li>
                    <li>Arcabook</li>
                    <li>Arcabook</li>
                    <li>Arcabook</li>
                </ul>
            </div>

            <div className={classes.bg_square}>
                <img className={classes.bg_img} src={image2} alt="image2" />
                <Button>Register</Button>
            </div>

            <DescriptionPanel />

            <img className={classes.bg_img} src={image3} alt="image3" />
            <div className={classes.bg_square}></div>

            <div className={classes.bg_square}></div>
            <img className={classes.bg_img} src={image4} alt="image4" />

        </div>
    );
};

export default Background;