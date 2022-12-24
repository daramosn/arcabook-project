import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/arcabook-1-crop2.png';
import AuthContext from '../../store/auth-context';

import LogModal from '../Forms/LogModal';

import classes from './Navbar.module.css';

const Navbar = (props) => {

    const ctx = useContext(AuthContext);

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
                    {ctx.isLogged &&
                        <Link to='/book-board'>
                            <li>Books</li>
                        </Link>}
                </ul>
                {!ctx.isLogged ?
                    <ul>
                        <li onClick={clickLoginHandler}>Log in</li>
                        {/* <li onClick={clickRegisterHandler}>Register</li> */}
                    </ul>
                    : <ul>
                        <li >Profile</li>
                        <Link to='/'>
                            <li onClick={ctx.onLogout}>Logout</li>
                        </Link>

                    </ul>
                }

            </nav>
        </React.Fragment>
    );
};

export default Navbar;