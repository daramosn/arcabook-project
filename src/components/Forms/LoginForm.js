import React, { useEffect, useState } from 'react';

import Button from '../UI/Button';

import classes from './LoginForm.module.css';

const LoginForm = (props) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const storedLoginInfo = localStorage.getItem('isLogged');
        if (storedLoginInfo === '1') {
            setIsLogged(true);
        }
    }, []);

    const emailChangeHandler = (event) => {
        setUserEmail(event.target.value);
    };

    const passChangeHandler = (event) => {
        setUserPass(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setIsLogged(true);
        localStorage.setItem('isLogged', '1');

        props.onSubmit();

    };

    if (isLogged === true) {
        return (<p>Welcome</p>);
    }

    return (
        <form className={`${classes.login_form}`} onSubmit={submitHandler}>

            <label htmlFor="email">e-mail</label>
            <input type="email" value={userEmail} name="email" id="email" onChange={emailChangeHandler} />

            <label htmlFor="password">Password</label>
            <input type="password" value={userPass} name="password" id="password" onChange={passChangeHandler} />

            <Button type='submit'>Log in</Button>

            <h5>Forgot password?</h5>
        </form>
    );
};

export default LoginForm;