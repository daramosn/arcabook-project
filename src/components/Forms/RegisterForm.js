import React, { useState } from 'react';

import Button from '../UI/Button';

import classes from './RegisterForm.module.css';

const RegisterForm = (props) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');

    const emailChangeHandler = (event) => {
        setUserEmail(event.target.value);
    };

    const passChangeHandler = (event) => {
        setUserPass(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        console.log('submit handler!');
        props.onSubmit();
    };

    return (
        <form className={classes.register_form} onSubmit={submitHandler}>
            <label htmlFor="email">Name</label>
            <input type="text" name="name" id="name" onChange={emailChangeHandler} />

            <label htmlFor="email">e-mail</label>
            <input type="email" value={userEmail} name="email" id="email" onChange={emailChangeHandler} />

            <label htmlFor="password">Password</label>
            <input type="password" value={userPass} name="password" id="password" onChange={passChangeHandler} />
            <label htmlFor="password2">Repeat password</label>
            <input type="password2" value={userPass} name="password2" id="password2" onChange={passChangeHandler} />

            <Button type='submit'>Register</Button>

            <h5 onClick={props.onChangeForm}>Do you have an account? Log in</h5>
        </form>
    );
};

export default RegisterForm;