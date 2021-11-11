import React from 'react'
import Cards from './Cards'

const CategoriasLista = ({categoria}) => {
    
    return (
        <div>
            <h1>Lista de categorias </h1>
            {
                categoria.map((cate, index ) =>{
                    return(
                        <Cards key={index} categoria={cate}/>
                    )
                })
            }
        </div>
    )
}

export default CategoriasLista
