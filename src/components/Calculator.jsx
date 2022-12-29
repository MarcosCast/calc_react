import React, { useState } from 'react';
import './Calculator.css';
//import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {Container} from '@mui/material';

export default function Calculator() {
    const[num, setNum] = useState(0); 
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e) {
        var input = e.target.value
        if(num === 0) {
            setNum(input);
        } else {
            setNum(num + input);
        }        
    }

    function inputClear() {
        setNum(0)
    }
    
    function opHandler() {
        if(num > 0) {
            setNum(-num)
        } else {
            setNum(Math.abs(num))
        }
    }

    //Corrigir calculo com percent
    function inputPercent() {
        setNum(num / 100);
    }  

    function result() {
        if (operator === "/") {

            setNum(parseFloat(oldnum) / parseFloat(num));

          } else if (operator === "*") {

            setNum(parseFloat(oldnum) * parseFloat(num));

          } else if (operator === "-") {

            setNum(parseFloat(oldnum) - parseFloat(num));

          } else if (operator === "+") {

            setNum(parseFloat(oldnum) + parseFloat(num));
          }

    }

    function operar(e) {
        var opInput = e.target.value;
        setOperator(opInput);
        setOldNum(num);
        setNum(0);
      }


    return (
        <div>
         <Box m={10} />   
                <Container maxWidth="xs">
                        <div className='backgr'>
                        <Box m={12} />  
                          <h1 className="led">{num}</h1>
                            <button className='con' onClick={inputClear}>AC</button>
                            <button className='con' onClick={opHandler}>+/-</button>
                            <button className='con' onClick={inputPercent}>%</button>
                            <button className='op' onClick={operar} value="/">/</button>

                            <button className='numero' onClick={inputNum} value="7">7</button>
                            <button className='numero' onClick={inputNum} value="8">8</button>
                            <button className='numero' onClick={inputNum} value="9">9</button>

                            <button className='op' onClick={operar} value="*">*</button>

                            <button className='numero' onClick={inputNum} value="4">4</button>
                            <button className='numero' onClick={inputNum} value="5">5</button>
                            <button className='numero' onClick={inputNum} value="6">6</button>

                            <button className='op' onClick={operar} value="-">-</button>

                            <button className='numero' onClick={inputNum} value="1">1</button>
                            <button className='numero' onClick={inputNum} value="2">2</button>
                            <button className='numero' onClick={inputNum} value="3">3</button>

                            <button className='op' onClick={operar} value="+">+</button>                            
                            
                            <button className='numero' onClick={inputNum} value="0">0</button>
                            <button className='numero' onClick={inputNum} value="00">00</button>
                            <button className='numero' onClick={inputNum} value=".">.</button>                         
                            <button onClick={result}>=</button>
                        </div>      
                </Container>
       </div>
    )
}