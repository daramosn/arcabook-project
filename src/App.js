import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Background from './components/Landingpage/Background';
import Footer from './components/Footer/Footer';
import Bookboard from './components/Books/Bookboard';
import BookDetails from './components/Books/BookDetails';

import AuthContext from './store/auth-context';

function App() {
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

    <AuthContext.Provider value={{ isLogged: isLogged, onLogin: loginHandler }}>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>

        <Route path='/home'>
          {isLogged ? <Redirect to='/book-board' /> :
            <React.Fragment>
              <Navbar onIsLogged={isLogged} onLogout={logoutHandler} />
              <Background />
              <Footer />
            </React.Fragment>
          }
        </Route>

        <Route path='/book-board' exact>
          <Navbar onIsLogged={isLogged} onLogout={logoutHandler} />
          <Bookboard />
          <Footer />
        </Route>

        <Route path='/book-board/:bookId'>
          <Navbar onIsLogged={isLogged} onLogout={logoutHandler} />
          <BookDetails />
          <Footer />

        </Route>

      </Switch>
    </AuthContext.Provider>

  );
}

export default App;
