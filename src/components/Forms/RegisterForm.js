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
            <br />
            <input type="text" name="name" id="name" onChange={emailChangeHandler} />

            <label htmlFor="email">e-mail</label>
            <input type="email" value={userEmail} name="email" id="email" onChange={emailChangeHandler} />

            <label htmlFor="password">Password</label>
            <input type="password" value={userPass} name="password" id="password" onChange={passChangeHandler} />

            <Button type='submit'>Register</Button>
        </form>
    );
};

export default RegisterForm;