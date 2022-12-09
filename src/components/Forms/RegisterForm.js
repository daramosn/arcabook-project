import React, { useContext, useState } from 'react';
import AuthContext from '../../store/auth-context';

import Button from '../UI/Button';

import classes from './RegisterForm.module.css';

const RegisterForm = (props) => {
    const ctx = useContext(AuthContext);

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userPass2, setUserPass2] = useState('');

    const nameChangeHandler = (event) => {
        setUserName(event.target.value);
    };
    const emailChangeHandler = (event) => {
        setUserEmail(event.target.value);
    };

    const passChangeHandler = (event) => {
        setUserPass(event.target.value);
    };
    const pass2ChangeHandler = (event) => {
        setUserPass2(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        ctx.onLogin();
        props.onSubmit();
    };

    return (
        <form className={classes.register_form} onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input type="text" value={userName} name="name" id="name" onChange={nameChangeHandler} />

            <label htmlFor="email">e-mail</label>
            <input type="email" value={userEmail} name="email" id="email" onChange={emailChangeHandler} />

            <label htmlFor="password">Password</label>
            <input type="password" value={userPass} name="password" id="password" onChange={passChangeHandler} />
            <label htmlFor="password2">Repeat password</label>
            <input type="password" value={userPass2} name="password2" id="password2" onChange={pass2ChangeHandler} />

            <Button type='submit'>Register</Button>

            <h5 onClick={props.onChangeForm}>Do you have an account? <span>Log in</span></h5>
        </form>
    );
};

export default RegisterForm;