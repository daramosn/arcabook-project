import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Background from './components/Landingpage/Background';
import Footer from './components/Footer/Footer';
import Bookboard from './components/Books/Bookboard';
import BookDetails from './components/Books/BookDetails';
import AuthContext from './store/auth-context';


function App() {
  const ctx = useContext(AuthContext);

  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>

      <Route path='/home'>
        {ctx.isLogged ? <Redirect to='/book-board' /> :
          <React.Fragment>
            <Navbar />
            <Background />
            <Footer />
          </React.Fragment>
        }
      </Route>

      <Route path='/book-board' exact>
        <Navbar />
        <Bookboard />
        <Footer />
      </Route>

      <Route path='/book-board/:bookId'>
        <Navbar />
        <BookDetails />
        <Footer />

      </Route>

    </Switch>

  );
}

export default App;
