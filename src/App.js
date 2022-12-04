import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Background from './components/Landingpage/Background';
import Footer from './components/Footer/Footer';
import Bookboard from './components/Books/Bookboard';
import BookDetails from './components/Books/BookDetails';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>

        <Route path='/home'>
          <Navbar />
          <Background />
          <Footer />
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
    </div>
  );
}

export default App;
