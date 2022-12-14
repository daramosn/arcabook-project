import React, { useState } from 'react';
// import image1 from '../../images/bgimage1.jpg'
import image2 from '../../images/bgimage2.jpg'
import image3 from '../../images/bgimage3.jpg'
import image4 from '../../images/bgimage4.jpg'

import DescriptionPanel from './DescriptionPanel';
import ImageWButton from './ImageWButton';
import LogModal from '../Forms/LogModal';

import classes from './Background.module.css';

const Background = (props) => {
    const [displayModal, setDisplayModal] = useState(false);
    const [formSelector, setFormSelector] = useState('');

    const clickRegisterHandler = () => {
        setFormSelector('Reg');
        setDisplayModal(true);
    };

    const modalToggleHandler = () => {
        setDisplayModal(false);
    };

    return (
        <React.Fragment>

            {displayModal &&
                <LogModal formSelectorValue={formSelector} onDisplayModalToggleHandler={modalToggleHandler} />
            }

            <div className={classes.background}>

                <div className={classes.bg_square}>
                    <ul>
                        <li>Arcabook</li>
                        <li>Arcabook</li>
                        <li>Arcabook</li>
                        <li>Arcabook</li>
                    </ul>
                </div>

                <ImageWButton className={classes.bg_img} onOpenModal={clickRegisterHandler} image={image2}>Register</ImageWButton>

                <div>
                    <DescriptionPanel />
                </div>

                <img className={classes.bg_img} src={image3} alt="image3" />
                <div className={classes.bg_square}>
                    <p>Arcabook will help you to get new books just by swapping those that you have already read!</p>
                </div>

                <div className={classes.bg_square}>
                    <p></p>
                </div>
                <img className={classes.bg_img} src={image4} alt="image4" />

            </div>
        </React.Fragment>
    );
};

export default Background;