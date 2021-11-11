import React, { useEffect, useState } from 'react'
import {Form, Button} from 'react-bootstrap'

const Formulario = () => {

    const [ data, setData] = useState({
        nombre: '',
        email: ''
    });


    const handleOnChange =({target})=>{
       setData({
           ...data,
           [target.name] : target.value
       })
        
    }

    useEffect(() => {
        
       console.log('ComponentDidMount');
       return() => {
           console.log('ComponentDidMount');
       }   
    }, [data.nombre])


    return (
        <div>
            <h1>Formulario</h1>
            <Form>
                    <Form.Group className="mb-3" controlId="formulario">
                        <Form.Label>Correo electronico</Form.Label>
                        <Form.Control
                            type="email" 
                            placeholder="Ingrese email" 
                            value={data.email}
                            onChange={handleOnChange}
                            name="email"
                           />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formulario">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Enter nombre"
                            value={data.nombre}
                            onChange={handleOnChange}
                            name="nombre"
                           /> 
                    </Form.Group>
                    <Button variant="success" >Enviar </Button>
            </Form>
        </div>
    )
}

export default Formulario
