import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLogged: false,
    onLogin: () => { },
    onLogout: () => { },
});

export const AuthContextProvider = (props) => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const storedLoginInfo = localStorage.getItem('isLogged');
        if (storedLoginInfo === '1') {
            setIsLogged(true);
        }
    }, []);

    const loginHandler = () => {
        localStorage.setItem('isLogged', '1');
        setIsLogged(true);
    };
    const logoutHandler = () => {
        localStorage.removeItem('isLogged');
        setIsLogged(false);
    };


    return (
        <AuthContext.Provider value={{ isLogged: isLogged, onLogin: loginHandler, onLogout: logoutHandler }}>
            {props.children}
        </AuthContext.Provider>
    );
}


export default AuthContext;