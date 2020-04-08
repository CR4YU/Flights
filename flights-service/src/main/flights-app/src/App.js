import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header/Header'
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header />
              <Main />
              <Footer />
          </div>
      </BrowserRouter>
  );
}

export default App;
