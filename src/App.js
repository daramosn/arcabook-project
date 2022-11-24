import React from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';
// import Background from './components/Landingpage/Background';
import Footer from './components/Footer/Footer';
import Bookboard from './components/Books/Bookboard';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Background /> */}
      <Bookboard></Bookboard>
      <Footer />
    </div>
  );
}

export default App;
