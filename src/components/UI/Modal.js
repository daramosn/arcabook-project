import React, { useState } from 'react';

import Card from './Card';
import Button from './Button'

import classes from './Modal.module.css';

const Modal = (props) => {
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
        props.onCloseModal();
    };

    return (
        <div>
            <div onClick={props.onCloseModal} className={classes.backdrop}></div>

            <Card className={classes.modal}>
                <form className={classes.modal_form} onSubmit={submitHandler}>
                    <label htmlFor="email">e-mail</label>
                    <input type="email" value={userEmail} name="email" id="email" onChange={emailChangeHandler} />

                    <label htmlFor="password">Password</label>
                    <input type="password" value={userPass} name="password" id="password" onChange={passChangeHandler} />

                    <Button type='submit'>Log in</Button>
                </form>
            </Card>
        </div>
    );
};

export default Modal;