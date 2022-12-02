import React from 'react';

import descImg1 from '../../images/descriptionimg1.jpg'
import descImg3 from '../../images/descriptionimg2.jpg'
import descImg2 from '../../images/descriptionimg3.jpg'
import descImg4 from '../../images/descriptionimg4.jpg'

import Card from '../UI/Card';
import classes from './DescriptionPanel.module.css';

const DescriptionPanel = (props) => {
    return (
        <Card className={classes.panel}>
            <div>
                <img src={descImg1} alt="descrp_img-1" />
                <p>Sign up</p>
            </div>
            <div>
                <img src={descImg2} alt="descrp_img-2" />
                <p>Post</p>
            </div>
            <div>
                <img src={descImg3} alt="descrp_img-3" />
                <p>Look</p>
            </div>
            <div>
                <img src={descImg4} alt="descrp_img-4" />
                <p>Swap!</p>
            </div>



        </Card>
    );
};

export default DescriptionPanel;