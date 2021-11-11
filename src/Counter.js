import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import useCounter from './CounterCustom'




const Counter = () => {


    
    const {counter, handleSumar, handleReset, handleRestar} = useCounter()

    // const mostrarDatos = (...datos) => {
    //     console.log(datos);

    // }
    // const datos = ['hola', 'Pepito', '27', 'Hola mundo']

    // mostrarDatos(...datos)


    return (
        <div>

            <h1>Contador: {counter}</h1> 
            <Button variant="success" onClick={handleSumar}>Sumar </Button>
            <Button variant="secondary" onClick={handleReset}>Reset</Button>
            <Button variant="danger" onClick={handleRestar}>Restar</Button>         


        </div>
    )
}

export default Counter
