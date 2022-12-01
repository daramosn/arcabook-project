import React from 'react';
import { Link } from 'react-router-dom';

import logoFooter from '../../images/arcabook-1-crop.png'

import classes from './Footer.module.css';

const Footer = (props) => {
    return (
        <div className={classes.footer}>
            <ul>
                <Link to='/'>
                    <img src={logoFooter} alt="" />
                </Link>
            </ul>

            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Github</li>
            </ul>
        </div>
    );
};

export default Footer;