import React, { useState } from 'react';
import './App.css';

const operadores = ['*', '/', '+', '.', '-'];

function App() {
  return (
    <div className="App">
      <h1>Calculadora</h1>
      <div className='calc'></div>      
    </div>
  );
}

export default App;
