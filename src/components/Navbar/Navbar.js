import React from 'react';
import logo from '../../images/arcabook-1-crop2.png';

import classes from './Navbar.module.css';

const Navbar = (props) => {

    return (
        <nav className={classes.nav}>

            <ul>
                <li><img src={logo} alt='logo' /></li>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>

            <ul>
                <li>Log in</li>
                <li>Register</li>
            </ul>

        </nav>
    );
};

export default Navbar;