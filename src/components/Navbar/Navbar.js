import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/arcabook-1-crop2.png';

// import Modal from '../UI/Modal'
// import LoginForm from '../Forms/LoginForm';
// import RegisterForm from '../Forms/RegisterForm';
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
                    <Link to='/book-board'>
                        <li>Contact</li>
                    </Link>
                    <li>About</li>
                </ul>

                <ul>
                    <li onClick={clickLoginHandler}>Log in</li>
                    <li onClick={clickRegisterHandler}>Register</li>
                </ul>

            </nav>
        </React.Fragment>
    );
};

export default Navbar;