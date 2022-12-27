//import React, { useState } from 'react';
import './App.css';

//const operadores = ['*', '/', '+', '.', '-'];

function App() {
  return (
    <div className="App">
      <h1>Calculadora</h1>
      <br/>
      <label>Primeiro Numero</label>
      <br/>
      <input type="number" />
      <br/>
      <label>Segundo Numero</label>
      <br/>
      <input type="number" />  
      <br/>
      <br/>

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
