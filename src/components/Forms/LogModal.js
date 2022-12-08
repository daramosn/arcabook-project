import React, { useState } from 'react';

import Modal from '../UI/Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const LogModal = (props) => {
    const [formSelector, setFormSelector] = useState(props.formSelectorValue);

    const changeFormHandler = () => {
        setFormSelector(formSelector === 'Log' ? 'Reg' : 'Log');
    };

    return (
        <Modal onCloseModal={props.onDisplayModalToggleHandler}>
            {(formSelector === 'Log') && <LoginForm onSubmit={props.onDisplayModalToggleHandler} onChangeForm={changeFormHandler} />}
            {(formSelector === 'Reg') && <RegisterForm onSubmit={props.onDisplayModalToggleHandler} onChangeForm={changeFormHandler} />}
        </Modal>
    );

};

export default LogModal;