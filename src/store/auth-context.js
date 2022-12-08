import React from 'react';


const AuthContext = React.createContext({
    isLogged: false,
    onLogin: () => { },
});

export default AuthContext;