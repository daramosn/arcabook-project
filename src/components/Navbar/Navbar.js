import React, { useState } from 'react';
import logo from '../../images/arcabook-1-crop2.png';

import Modal from '../UI/Modal'
import LoginForm from '../Forms/LoginForm';

import classes from './Navbar.module.css';

const Navbar = (props) => {
    const [displayModal, setDisplayModal] = useState(false);

    const openModalToggleHandler = () => {
        setDisplayModal(!displayModal);
    }

    return (
        <React.Fragment>
            {displayModal ?
                <Modal onCloseModal={openModalToggleHandler}>
                    <LoginForm />
                </Modal>
                : ''
            }
            <nav className={classes.nav}>

                <ul>
                    <li><img src={logo} alt='logo' /></li>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>

                <ul>
                    <li onClick={openModalToggleHandler}>Log in</li>
                    <li>Register</li>
                </ul>

            </nav>
        </React.Fragment>
    );
};

export default Navbar;