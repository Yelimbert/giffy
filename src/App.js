import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route } from "wouter";


function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/penguing'>Gifs de pinguinos</Link>
        <Link to='/gif/pandas'>Gifs de pandas</Link>
        <Link to='/gif/morty'>Gifs de morty</Link>
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword" />     
      </section>
    </div>
  );
}

export default App;
