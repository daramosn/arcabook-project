import React, { useState, useContext } from 'react';

import Button from '../UI/Button';
import AuthContext from '../../store/auth-context';

import classes from './LoginForm.module.css';

const LoginForm = (props) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');

    const ctx = useContext(AuthContext);

    const emailChangeHandler = (event) => {
        setUserEmail(event.target.value);
    };

    const passChangeHandler = (event) => {
        setUserPass(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        ctx.onLogin();
        props.onSubmit();
    };

    return (
        <form className={`${classes.login_form}`} onSubmit={submitHandler}>

            <label htmlFor="email">E-mail</label>
            <input type="email" value={userEmail} name="email" id="email" onChange={emailChangeHandler} />

            <label htmlFor="password">Password</label>
            <input type="password" value={userPass} name="password" id="password" onChange={passChangeHandler} />

            <Button type='submit'>Log in</Button>

            <h5>Forgot password?</h5>

            <h5 onClick={props.onChangeForm}>No account? Create one</h5>
        </form>
    );
};

export default LoginForm;