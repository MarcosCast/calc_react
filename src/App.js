//import React, { useState } from 'react';
import './App.css';

//const operadores = ['*', '/', '+', '.', '-'];

function App() {
  return (
    <div className="App">
      <h1>Calculadora</h1>
      <label>Primeiro Numero</label>
      <input type="number" />
      <label>Segundo Numero</label>
      <input type="number" />  

      <select>
        <option>Somar</option>
        <option>Subtrair</option>
        <option>Multiplicar</option>
        <option>Dividir</option>                
      </select>   
    </div>
  );
}

export default App;
