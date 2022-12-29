import React, { useState } from 'react';
import './Calculator.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Calculator() {
    return (
       // <React.Fragment>
          //  <CssBaseline />
                <Container maxWidth="small">
                    <Box>
                        <div className='backgr'>
                            <button onClick="">1</button>
                            <button onClick="">2</button>
                            <button onClick="">3</button>
                            <button onClick="">4</button>
                            <button onClick="">5</button>
                            <button onClick="">6</button>
                            <button onClick="">7</button>
                            <button onClick="">8</button>
                            <button onClick="">9</button>
                            <button onClick="">0</button>
                            <button onClick="">,</button>
                            <button onClick="">AC</button>
                            <button onClick="">+/-</button>
                            <button onClick="">%</button>
                            <button onClick="">/</button>
                            <button onClick="">*</button>
                            <button onClick="">-</button>
                            <button onClick="">+-</button>
                            <button onClick="">=</button>
                        </div>
                    </Box>
                </Container>
       // </React.Fragment>
    )
}