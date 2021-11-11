import {Button} from 'react-bootstrap'
import React, { useState } from 'react'
import CategoriasLista from './CategoriasLista'
import CategoriasAdd from './CategoriasAdd'

const CategoriasApp = () => {
    const [categorias, setCategorias] = useState(['Horror'])
    const handleAgregar = () =>{
        setCategorias(
            [...categorias, 'Risas']
        )
    }

    return (
        <div>
            <h1>Componentsh hooks</h1>
            <ol>
               <CategoriasAdd setCategorias={setCategorias}/>
               <CategoriasLista categoria={categorias}/>
            </ol>
            <Button variant="success" onClick={handleAgregar}>Agregar </Button>
           
        </div>
    )
}

export default CategoriasApp
