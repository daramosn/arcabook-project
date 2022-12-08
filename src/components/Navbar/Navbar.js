import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/arcabook-1-crop2.png';

import LogModal from '../Forms/LogModal';

import classes from './Navbar.module.css';

const Navbar = (props) => {

    const [displayModal, setDisplayModal] = useState(false);
    const [formSelector, setFormSelector] = useState('');

    const clickRegisterHandler = () => {
        setFormSelector('Reg');
        setDisplayModal(true);
    };

    const clickLoginHandler = () => {
        setFormSelector('Log');
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

            <nav className={classes.nav}>
                <ul>
                    <li><img src={logo} alt='logo' /></li>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    {props.onIsLogged &&
                        <Link to='/book-board'>
                            <li>Books</li>
                        </Link>}
                    <li>About</li>
                </ul>
                {!props.onIsLogged ?
                    <ul>
                        <li onClick={clickLoginHandler}>Log in</li>
                        <li onClick={clickRegisterHandler}>Register</li>
                    </ul>
                    : <ul>
                        <li >Profile</li>
                        <Link to='/'>
                            <li onClick={props.onLogout}>Logout</li>
                        </Link>

                    </ul>
                }

            </nav>
        </React.Fragment>
    );
};

export default Navbar;